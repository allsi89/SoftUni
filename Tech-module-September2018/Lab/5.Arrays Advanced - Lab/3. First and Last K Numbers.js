function solve(numbers) {
    let k = numbers.shift();

    let firstTwoElements = numbers.slice(0, k);
    let lastTwoElements = numbers.slice(numbers.length - k);
    console.log(firstTwoElements.join(' '));
    console.log(lastTwoElements.join(' '));
}

solve([3,
    6, 7, 8, 9]);