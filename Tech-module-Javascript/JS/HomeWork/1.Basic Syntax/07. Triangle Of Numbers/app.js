function solve(input) {

    let n = Number(input);

    for (let row = 1; row <= n; row++) {

        let result = '';

        for (let col = 1; col <= row; col++) {

            result += row + " ";
        }
        console.log(result);
    }
}
solve(3);