function solve(original) {
    let modified = [];

    for (let i = 0; i < original.length; i++) {
        let current = original[i];

        if (current % 2 === 0) {
            modified.push(current + i);
        } else {
            modified.push(current - i);
        }
    }
    console.log(modified);
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < original.length; i++) {
        originalSum += original[i];
        modifiedSum += modified[i];
    }
    console.log(originalSum);
    console.log(modifiedSum);
}

solve([5, 15, 23, 56, 35]);