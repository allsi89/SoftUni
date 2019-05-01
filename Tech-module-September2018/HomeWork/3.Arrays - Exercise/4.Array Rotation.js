function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstEl = arr[0];

        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = firstEl;
    }
    console.log(arr.join(' '));
}
solve([51, 47, 32, 61, 21], 2);