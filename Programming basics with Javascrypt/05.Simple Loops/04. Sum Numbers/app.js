function sumNumbers(args) {
    let n = Number(args[0]);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let input = Number(args[i]);
        sum += input;
    }
    console.log(sum);
}
sumNumbers([3,5,6,13]);