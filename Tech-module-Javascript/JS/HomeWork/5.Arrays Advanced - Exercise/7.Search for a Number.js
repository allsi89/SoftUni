function solve(numbers, actions) {
    let [range, deleteCount, searched] = actions;
    let sliced = numbers.slice(0, range);
    sliced.splice(0, deleteCount);

    let counter = 0;
    for (let num of sliced) {

        if (num === searched) {
            counter++;
        }
    }
    console.log(`Number ${searched} occurs ${counter} time.`);
}

solve([5, 2, 3, 4, ],
    [5, 5, 3]);