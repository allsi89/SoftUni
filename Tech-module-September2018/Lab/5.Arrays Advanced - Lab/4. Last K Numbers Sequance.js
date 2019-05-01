function solve(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let lastThreeEl = sequence.slice(start);

        let sum = 0;
        for (let number of lastThreeEl) {
            sum += number;
        }
        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}

solve(6, 3);