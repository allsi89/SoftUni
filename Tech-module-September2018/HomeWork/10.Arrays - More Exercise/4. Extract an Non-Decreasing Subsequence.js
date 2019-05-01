function solve(arr) {
    let nonDecSub = []; //non decreasing subsequence
    nonDecSub.push(arr[0]);
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (currentNumber >= max){
            max = currentNumber;
            nonDecSub.push(max);
        }
    }
    console.log(nonDecSub.join(' '));
}
solve([ -1, 0, -3, -4]);