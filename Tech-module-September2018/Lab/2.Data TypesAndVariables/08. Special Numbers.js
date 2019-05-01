function solve(n) {

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let current = i;

        while (current !== 0) {

            let currentDigit = parseInt(current % 10);
            sum += currentDigit;
            current = parseInt(current / 10);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
solve(15);