function solve(base, increment) {


    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let steps = 0;

    while (base > 2) {
        steps++;
        let stoneBase = base - 2;
        stone += stoneBase * stoneBase * increment;

        if (steps % 5 === 0) {
            lapis += (stoneBase * 4 + 4) * increment;
        } else {
            marble += (stoneBase * 4 + 4) * increment;
        }
        base -= 2;
    }
    let gold = base * base * increment;
    steps++;
    let height = Math.floor(steps * increment);
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}
solve(23, 0.5);