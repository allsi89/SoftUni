function solve(firstMatrix, secondMatrix) {

    let matricesSum = [];

    for (let row = 0; row < firstMatrix.length; row++) {
        let currentArr = [];
        let remainder;
        let flag = false;

        for (let col = 0; col < firstMatrix[row].length; col++) {

            let first = firstMatrix[row][col];
            let second = secondMatrix[row][col];
            let currentSum = first + second;

            if (flag) {
                currentSum += remainder;

                if (currentSum > 9) {
                    let currentRem = currentSum - 9;
                   // console.log(currentRem);
                    currentArr.push(9,currentRem);
                    flag = true;
                }

            } else {
                if (currentSum > 9) {
                    currentArr.push(9);
                    remainder = currentSum - 9;
                    flag = true;
                } else {

                    flag = false;

                    currentArr.push(currentSum);
                }
            }
        }

        matricesSum.push(currentArr);
    }
    let result = JSON.stringify(matricesSum);
    console.log(result);
}

solve(
    [[9, 9], [4, 7]],
    [[7, 1], [1, 2]]
);