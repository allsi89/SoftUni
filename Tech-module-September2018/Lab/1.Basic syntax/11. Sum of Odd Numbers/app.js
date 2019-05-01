function sumOddNumbers(num) {
    let n = Number(num);
    let counter = 0;
    let sumOfOdds = 0;

    for (var i = 1; i < 100; i++) {

        if (i % 2 !== 0) {
            console.log(i);
            counter++;
            sumOfOdds += i;

            if (counter === n) {
                console.log(`Sum: ${sumOfOdds}`)
                break;
            }
        }
    }
}
sumOddNumbers(12);
