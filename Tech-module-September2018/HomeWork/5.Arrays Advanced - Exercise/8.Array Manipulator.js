function solve(array, commandsArr) {

    for (let i = 0; i < commandsArr.length; i++) {
        let currentCommand = commandsArr[i].split(' ');

        if (currentCommand.length === 3) {
            let index = +currentCommand[1];
            let element = +currentCommand[2];
            array = addElement(index, element);
        }
        else if (currentCommand[0] === 'addMany') {
            currentCommand.shift();
            let newArr = currentCommand.map(Number);
            let index = newArr.shift();
            array = addMany(index, newArr);
        } else if (currentCommand[0] === 'contains') {
            let element = +currentCommand[1];

            if (array.includes(element)) {
                console.log(array.indexOf(element));
            } else {
                console.log(-1);
            }
        } else if (currentCommand[0] === 'remove') {
            let index = +currentCommand[1];
            array = remove(index);
        } else if (currentCommand[0] === 'shift') {
            let position = +currentCommand[1];
            array = shift(position);
        } else if (currentCommand[0] === 'sumPairs') {
            array = sumPairs(array);
        } else {
            console.log(array);
        }
    }


    function addElement(index, element) {
        array.splice(index, 0, element);
        return array;
    }

    function addMany(index, newArr) {
        array.splice(index, 0, ...newArr);
        return array;
    }

    function remove(index) {
        array.splice(index, 1);
        return array;
    }

    function shift(position) {
        position %= array.length;
        let left = array.slice(0, position);
        let right = array.slice(position);
        array = right.concat(left);
        return array;
    }

    function sumPairs(array) {
        let sum = [];


        if (array.length % 2 === 1) {
            array.push(0);
        }
        for (let i = 0; i < array.length; i++) {
            let currentNum = array[i];
            sum.push(currentNum + array[i + 1]);
            array.splice(i, 1);
        }
        return sum;
    }
}

solve([1, 7, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ['shift 2']);