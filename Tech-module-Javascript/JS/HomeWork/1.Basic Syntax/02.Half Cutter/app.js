function solve(num) {
    let size = Number(num);
    let cutCounter = 0;

    do {
        size /= 2;
        cutCounter++;
    } while (size >= 1);
    console.log(`Length is ${size.toFixed(2)} cm. after ${cutCounter} cuts.`);
}
solve(1000);