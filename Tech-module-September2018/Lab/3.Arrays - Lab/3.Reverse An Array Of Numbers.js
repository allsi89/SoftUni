function solve(n, arr) {
   let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    newArr = newArr.reverse();
    let reversedAsText = "";
    for (let i = 0; i < newArr.length; i++) {
        reversedAsText += newArr[i] + " ";
    }

   console.log(reversedAsText);
}
solve(3,[10,20,30,40,50]);