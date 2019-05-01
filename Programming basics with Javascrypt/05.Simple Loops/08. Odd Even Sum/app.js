function solve(args) {
    let n = Number(args[0]);
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (i % 2 == 1) {
            oddSum += currentNum;
        } else {
            evenSum += currentNum;
        }

    }
    if (oddSum == evenSum) {
        console.log("Yes");
        console.log(`Sum = ${evenSum}`);
    }
    else {
        console.log("No");
        console.log(`Diff = ${Math.abs(oddSum - evenSum)}`);
    }
}
solve([3, 12, 3, 5, 16, 4, 67]);