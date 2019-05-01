function solve(arr) {
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);

        if (arr[i] % 2 === 0){
            evenSum+=arr[i];
        }
    }
    console.log(evenSum);
}
solve(['1','2','3','4','5','6']);