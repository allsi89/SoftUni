function solve(array, params) {

    let [bomb, power] = params;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === bomb) {
            let start = Math.max(0, i - power);
            let range = power * 2 + 1;

            if (i - power < 0){
                range -= (power - i);
            }
            array.splice(start, range);
            i = start - 1;
        }
    }
   // console.log(array.reduce((a, b) => a + b));
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

solve([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);