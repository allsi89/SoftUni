function solve(input) {

    let lostGames = Number(input.shift());
    let headsetPrice = Number(input[0]);
    let mousePrice = Number(input[1]);
    let keyboardPrice = Number(input[2]);
    let monitorPrice = Number(input[3]);

    let sum = 0;

    if (lostGames >= 12) {
        let monitorTotal = Math.floor(lostGames / 12) * monitorPrice;
        let headsetTotal = Math.floor(lostGames / 2) * headsetPrice;
        let mouseTotal = Math.floor(lostGames / 3) * mousePrice;
        let keyboardTotal = Math.floor(lostGames / 6) * keyboardPrice;
        sum = monitorTotal + headsetTotal + mouseTotal + keyboardTotal;

        console.log(`Rage expenses: ${sum.toFixed(2)} lv.`);
    }
    else if (lostGames >= 6) {
        let headsetTotal = Math.floor(lostGames / 2) * headsetPrice;
        let mouseTotal = Math.floor(lostGames / 3) * mousePrice;
        let keyboardTotal = Math.floor(lostGames / 6) * keyboardPrice;
        sum = headsetTotal + mouseTotal + keyboardTotal;

        console.log(`Rage expenses: ${sum.toFixed(2)} lv.`);
    }
    else if (lostGames >= 3) {
        let headsetTotal = Math.floor(lostGames / 2) * headsetPrice;
        let mouseTotal = Math.floor(lostGames / 3) * mousePrice;
        sum = headsetTotal + mouseTotal;

        console.log(`Rage expenses: ${sum.toFixed(2)} lv.`);
    }
    else if (lostGames >= 2) {
        let headsetTotal = Math.floor(lostGames / 2) * headsetPrice;
        console.log(`Rage expenses: ${headsetTotal.toFixed(2)} lv.`);
    }
}

solve([23,
    12.50,
    21.50,
    40,
    200]);