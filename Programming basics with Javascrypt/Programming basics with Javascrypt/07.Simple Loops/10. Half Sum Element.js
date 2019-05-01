function solve(args){
    let n = Number(args[0]);
    let sum = 0;
    let maxNum = Number.NEGATIVE_INFINITY;
    
    for(let i = 1; i <= n; i++){
        let currentNum = Number(args[i]);
        
        sum += currentNum;
        if (currentNum > maxNum) {
            maxNum = currentNum;
        }

    }
    let diff = sum - maxNum;
    if (maxNum === diff){
        console.log("Yes");
        console.log(`Sum = ${maxNum}`);
    }
    else {
        console.log("No");
        console.log(`Diff = ${Math.abs(diff - maxNum)}`);
    }

}
solve(["4", "6", "1", "2", "3"]);