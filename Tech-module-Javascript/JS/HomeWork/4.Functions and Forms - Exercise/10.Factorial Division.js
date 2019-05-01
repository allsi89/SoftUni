function factorial(first, second) {

    let firstFactorial = getFactorial(first);
    let secondFactorial = getFactorial(second);
    console.log((firstFactorial / secondFactorial).toFixed(2));

    function getFactorial(number) {
        let factorial = 1;

        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

factorial(6, 2);