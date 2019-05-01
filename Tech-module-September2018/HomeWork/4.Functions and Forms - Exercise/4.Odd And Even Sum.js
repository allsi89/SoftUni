function oddAndEvenSum(number) {

    number = number.toString();
    let odd = getOddSum(number);
    let even = getEvenSum(number);
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

    function getOddSum(number) {
        let oddSum = 0;

        for (let i = 0; i < number.length; i++) {
            let currentEl = (+number[i]);

            if (currentEl % 2 === 1) {
                oddSum += currentEl;
            }
        }
        return oddSum;
    }

    function getEvenSum(number) {
        let evenSum = 0;

        for (let i = 0; i < number.length; i++) {
            let currentEl = (+number[i]);

            if (currentEl % 2 === 0) {
                evenSum += currentEl;
            }
        }
        return evenSum;
    }
}

oddAndEvenSum(3495892137259234);