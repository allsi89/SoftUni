function solve(input) {
    let rotations = Number(input[input.length - 1]);
    input.pop();

    for (let i = 0; i < rotations; i++) {
        let lastElement = input.pop();
        input.unshift(lastElement);
    }
    console.log(input.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);