function solve(arr) {
    let matrix = [];

    //parse the array of strings to matrix of numbers
    for (let i = 0; i < arr.length; i++) {
        let currentArr = arr[i];
        currentArr = arr[i].split(' ').map(Number);
        matrix.push(currentArr);
    }
    //compare diagonals
    let firstSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentEl = matrix[i][i];
        firstSum += currentEl;
    }
    let secondSum = 0;

    for (let i = matrix.length - 1; i >= 0; i--) {
        let currentEl = matrix[i][i];
        secondSum += currentEl;
    }

    if (firstSum === secondSum){
        for (let i = 0; i < matrix.length; i++) {

            for (let j = 0; j < matrix.length; j++) {
                
                if (i !== j &&  i !== matrix.length - 1 - j){
                    matrix[i][j] = firstSum;
                }
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    } else {

        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);