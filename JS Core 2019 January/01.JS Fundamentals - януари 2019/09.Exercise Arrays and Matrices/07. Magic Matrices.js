//jshint esversion: 6
function solve(matrix) {

    //rows sum
    let rowSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        let currentRowSum = 0;
        currentRowSum += matrix[row].reduce((a,b) =>  a + b, 0);

        if (row === 0) {
            rowSum = currentRowSum;
        } else if (rowSum !== currentRowSum) {
            return false;
        }
    }
    // cols sum
    for (let col = 0; col < matrix[0].length; col++) {
        let colsSum = 0;
        colsSum += matrix[col].reduce((a, b) => a + b, 0);

        if (colsSum !== rowSum) {
            return false;
        }
    }

    return true;
}

console.log(solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
));