function solve([imput]){
    let n = Number(imput);
    let height = n;
    let insideColumn = Math.floor (n / 2);
    let middle = Math.floor(n / 2);
    let colRoof = `/${"^".repeat(insideColumn)}\\`;
    let midRoof = "_".repeat(middle);
    let colBottom = `\\${"_".repeat(insideColumn)}/`;
    let midBottom = " ".repeat(middle);
    //let bodyMiddle = " ".repeat((2 * n) - 2);
    let bodyIndex = height - 3;
    let bodyMiddle = " ".repeat(middle);
    if (n <= 4){
       console.log(`${colRoof}${colRoof}`);
    for(let row = 0; row < n - 2; row++){
       console.log(`|${" ".repeat((n * 2) - 2)}|`)
    }   
       console.log(`${colBottom}${colBottom}`);
        return;
    }

        
    console.log(`${colRoof}${midRoof}${colRoof}`);
    for(let row = 0; row < height - 2; row++){
    if (row == bodyIndex){
        bodyMiddle = "_".repeat(middle);
    }
    else {
        bodyMiddle = " ".repeat(middle);
        
    }
        console.log(`|${" ".repeat(insideColumn + 1)}${bodyMiddle}${" ".repeat(insideColumn + 1)}|`);
    }
    console.log(`${colBottom}${midBottom}${colBottom}`);

}
solve([7]);