function calculate(num1, num2, operator) {

    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '/': return num1 / num2;
        case '*': return num1 * num2;
        case '%': return num1 % num2;
        case '**': return num1 ** num2;
    }
}

console.log(calculate(3, 5.5, '*'));