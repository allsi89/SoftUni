function minNumber(args) {
    let n = Number(args[0]);
    let min = Number(args[1]);

    for (let i = 1; i <= n; i++) {
        let num = Number(args[i]);
        if (num < min) {
            min = num;
        }
    }
    console.log(min);
}
minNumber([3, 2, 13, 3]);