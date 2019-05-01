function solve(arr) {
    let topIntegers = [];

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let isTopInteger = true;

        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if (currentEl <= nextEl) {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            topIntegers.push(currentEl);
        }
    }
    console.log(topIntegers.join(' '));
}

solve([1, 4, 3, 2]);