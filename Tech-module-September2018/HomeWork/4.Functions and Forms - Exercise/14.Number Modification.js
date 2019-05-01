function solve(number) {

    let average = getAverage(number);
    let output = addDigit(number);
    console.log(output);

    function getAverage(number) {
        let sum = 0;
        let avg = 0;
        let counter = 0;
        while (number) {
            sum += number % 10;
            counter++;
            number = Math.floor(number / 10);
        }
        avg = sum / counter;
        return avg
    }

    function addDigit(number) {

        while (average < 5) {
            let nuberAsTxt = number.toString();
            nuberAsTxt += 9;
            number = +nuberAsTxt;
            average = getAverage(number);
        }
        return number;
    }
}

solve(5835);