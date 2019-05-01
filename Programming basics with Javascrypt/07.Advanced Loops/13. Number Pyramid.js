function solve([n]){
    n = Number(n);
    let row = 1;
    let symbolsCount = 1;
    let hasFinished = false;
    while(true){
        let text = ``;
        for(let i = 0; i < row; i++){
            text += symbolsCount + " ";
            if (symbolsCount == n){
                hasFinished = true;
                break;
            }
            symbolsCount++;
        }
        console.log(text);
        if (hasFinished) {
            break;
        }
        row++;
    }
}
solve([7]);