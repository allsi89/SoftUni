function solve(arr) {
    // convert array of strings to an array of numbers

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let biggestProduct = Number.MIN_SAFE_INTEGER;

    //iterate through the array

    for (let i = 0; i < arr.length; i++) {
        let s = arr[i];
        //check if s is in interval

        if (s >= 0 && s < 10) {
            let start = i + 1;
            let end = i + s;
            let currentProduct = 1;
            //calculate current product

            for (let j = start; j <= end; j++) {
                currentProduct *= arr[j];
            }
            if (currentProduct > biggestProduct) {
                biggestProduct = currentProduct;
            }
        }

    }
    console.log(biggestProduct);
}

solve([10, 20, 2, 30, 44, 3, 56, 20, 24]);