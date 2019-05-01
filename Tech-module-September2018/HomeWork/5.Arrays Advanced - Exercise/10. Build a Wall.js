function solve(crews) {
    crews.map(Number);
    let dailyCostArr = [];

    while (!crews.every(x => x === 30)) {
        let dailyCost = 0;

        for (let i = 0; i < crews.length; i++) {

            if (crews[i] !== 30) {
                crews[i]++;
                dailyCost += 195;
            }
        }
        dailyCostArr.push(dailyCost);
    }
    console.log(dailyCostArr.join(', '));
    let finalCost = dailyCostArr.reduce((a, b) => a + b) * 1900;
    console.log(`${finalCost} pesos`);
}

solve([17, 22, 17, 19, 17]);