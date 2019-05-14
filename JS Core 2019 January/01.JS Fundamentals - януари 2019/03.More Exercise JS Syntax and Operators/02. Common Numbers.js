function solve(arr1, arr2, arr3) {
    let commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            for (let k = 0; k < arr3.length; k++) {
                let currentNum = arr3[k];

                if (arr1.includes(currentNum) && arr2.includes(currentNum) && !commonElements.includes(currentNum)) {
                    commonElements.push(currentNum);
                }
            }
        }

    }
    commonElements.sort((a, b) => a - b);

    if (commonElements.length > 0) {
        console.log(`The common elements are ${commonElements.join(', ')}.`);
    }
    let average = commonElements.reduce((a, b) => a + b, 0);
    average /= commonElements.length;
    console.log(`Average: ${average}.`);
    let middle = Math.floor(commonElements.length / 2);
    let median;

    if (commonElements.length > 0) {

        if (commonElements.length % 2 === 1) {
            median = commonElements[middle];
        } else {
            median = (commonElements[middle] + commonElements[middle - 1]) / 2;
        }
        console.log(`Median: ${median}.`);
    }
}

solve(
    [1],
    [2, 1],
    [3, 1]
);