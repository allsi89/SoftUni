function solve(input) {
    let modified = [];

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (!modified.includes(current)) {
            modified.push(current);
        }
    }
    console.log(modified.join(' '));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);