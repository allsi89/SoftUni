function solve(arr) {
    let sequence = arr[0].split(' ');
    for (let i = 0; i < sequence.length; i++) {
        sequence[i] = Number(sequence[i]);
    }
    let magicSum = Number(arr[1]);

    for (let i = 0; i < sequence.length - 1; i++) {
        let firstNum = sequence[i];

        for (let j = i + 1; j < sequence.length; j++) {
            let secondNum = sequence[j];

            if (firstNum + secondNum === magicSum){
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}
solve(['1 2 3 4 5 6', 6]);