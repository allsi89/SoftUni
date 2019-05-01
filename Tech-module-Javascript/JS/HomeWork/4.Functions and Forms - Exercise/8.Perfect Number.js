function solve(num) {

    let sum = getSum(num);
    console.log(sum === num ? "We have a perfect number!" : "It’s not so perfect.");

    function getSum(num) {
        let sum = 0;

        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
}

solve(11);