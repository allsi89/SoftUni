function solve(numbers) {
    let sortedNumbers = [];

    for (let number of numbers) {
        if (number < 0) {
            sortedNumbers.unshift(number);
        } else {
            sortedNumbers.push(number);
        }
    }
    for (let number of sortedNumbers) {
        console.log(number);
    }
}

solve([3, -2, 0, -1]);