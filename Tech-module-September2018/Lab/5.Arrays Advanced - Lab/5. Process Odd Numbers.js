function solve(numbers) {

    let modified = [];
    for (let i = 0; i < numbers.length; i++) {

        if (i % 2 === 1) {
            modified.push(numbers[i]);
        }
    }
    modified = modified
        .map((x) => x * 2)
        .reverse();
    console.log(modified.join(' '));
}

solve([10, 15, 20, 25]);