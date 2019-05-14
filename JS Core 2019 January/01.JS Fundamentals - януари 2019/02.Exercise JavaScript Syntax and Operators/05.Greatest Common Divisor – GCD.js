function solve(num1, num2) {
    let smallestNum = Math.min(+num1, +num2);
    let biggestDivisor = 0;

    for (let i = 1; i <= smallestNum; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            biggestDivisor = i;
        }
    }
    console.log(biggestDivisor);
}

solve(2154, 458);