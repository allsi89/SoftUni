function solve(args) {
    let n = Number(args[0]);
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 1; i <= n; i++){
        let currentNum = Number(args[i]);
        leftSum += currentNum;
    }
    for (let i = n + 1; i <= 2 * n; i++){
        let currentNum = Number(args[i]);
        rightSum += currentNum;
    }
    if (leftSum == rightSum){
        console.log(`Yes, sum = ${rightSum}`);

    }
    else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
    }
}
solve([2,10,90,60,30]);