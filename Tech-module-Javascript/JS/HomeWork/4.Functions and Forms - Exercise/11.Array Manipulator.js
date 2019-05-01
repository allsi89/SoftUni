function solve(arr) {
    let numArr = arr[0].split(' ').map(Number);
    let command = '';
    let result;

    for (let i = 1; i < arr.length; i++) {
        command = arr[i].split(' ');

        if (command.includes('exchange')){
            let index = +command[1];
            numArr = exchange(numArr, index);
            console.log(numArr);
        }
        else if (command.includes('max')) {
            let subCommand = command[1];

            if (subCommand === 'odd'){
                result = maxNum(getOdd(numArr));
                console.log(result);
            } else {
                result = maxNum(getEven(numArr));
                console.log(result);
            }
        }
    }

    function exchange(numArr, index) {
        let newArr = [];

        for (let i = 0; i < numArr.length; i++) {

            let left = numArr.slice(0, index + 1);
            let right = numArr.slice(index + 1, numArr.length);
            newArr = right.concat(left);
        }
        numArr = newArr;
        return numArr;
    }

    function minimalNum(numArr) {
        let index;

        for (let i = 0; i < numArr; i++) {
        let min = numArr.reduce((a,b) => Math.min(a,b));

            if (min){
                index = i;
            }
        }
        return index;
    }

    function maxNum(numArr) {
        let index;
        for (let i = 0; i < numArr.length; i++) {
            let max = numArr.reduce((a,b) => Math.max(a,b));

            if (max){
                index = i;
            }
        }
        return index;
    }
    
    function getOdd(numArr) {
        let oddArr= [];
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] % 2 === 1){
                oddArr.push(numArr[i]);
            }
        }
        return oddArr;
    }

    function getEven(numArr) {
        let evenArr = [];
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] % 2 === 0){
                evenArr.push(numArr[i]);
            }
        }
        return evenArr;
    }
}

solve(['1 3 5 7 9',
    'exchange 1',
    'max odd',
    'min even',
    'first 2 odd',
    'last 2 even',
    'exchange 3']);