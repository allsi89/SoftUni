function solve(arg1, arg2) {
    let num1 = +arg1;
    let num2 = +arg2;
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        let currentNumber = i;
        sum += currentNumber;
    }
    console.log(sum);
}

solve('1', '5' );