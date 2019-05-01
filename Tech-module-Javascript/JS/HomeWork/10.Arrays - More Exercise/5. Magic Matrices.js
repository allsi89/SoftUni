function solve(arr) {

    let isTrue = true;
    let sumOfFirst = arr[0].reduce((a, b) => a + b);

    for (let i = 0; i < arr.length; i++) {
        let currentSum = arr[i].reduce((a, b) => a + b);

        if (currentSum !== sumOfFirst) {
            isTrue = false;
            break;
        }

        let columnSum = 0;

        for (let j = 0; j < arr.length; j++) {
            columnSum += arr[i][j];
        }
        if (columnSum != sumOfFirst) {
            isTrue = false;
            break;
        }
        columnSum = 0;
    }
    console.log(isTrue ? "true" : "false");
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);