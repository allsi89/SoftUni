function solve(input) {
    input.sort((a,b) => b - a);
    let length = input.length;
    let mergedArr = [];

    for (let i = 0; i < length; i++) {

        if (i % 2 === 0) {
            mergedArr.push(input.shift());
        } else {
            mergedArr.push(input.pop());
        }
    }
    console.log(mergedArr.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);