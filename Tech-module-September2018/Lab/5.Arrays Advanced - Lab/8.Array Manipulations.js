function solve(arr) {
    let numbers = arr
        .shift()
        .split(' ')
        .map(Number);

    // initializing the commands
    for (let i = 0; i < arr.length; i++) {
        let [command, first, second] = arr[i].split(' ');
        first = +first;
        second = +second;

        switch (command) {
            case 'Add':
                numbers = addNumbers(first);
                break;
            case 'Remove':
                numbers = removeElements(first);
                break;
            case 'RemoveAt':
                numbers = removeFromIndex(first);
                break;
            case 'Insert':
                numbers = insert(first, second);
                break;
        }
    }
    console.log(numbers.join(' '));

    function addNumbers(number) {

        numbers.push(number);
        return numbers;
    }

    function removeElements(number) {

        numbers = numbers.filter((x) => x !== number);
        return numbers;
    }

    function removeFromIndex(number) {
        numbers.splice(number, 1);
        return numbers;
    }

    function insert(first, second) {
        numbers.splice(second, 0, first);
        return numbers;
    }
}

solve(["4 19 2 53 6 43",
    "Add 3", 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);