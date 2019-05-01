function solve([n]){
    n = Number(n);
    let height = (3 * n) + 3;
    let width = (2 * n) + 2;
    let startingCurvs = 2;
    let verticalPartH = (n - 1) + (n - 2) + 3;
    let digPartH = height - verticalPartH;
    let sockIndex = Math.floor((digPartH / 2) - 2);
    

    if (n % 2 == 0){
        sockIndex = Math.floor((digPartH / 2) - 1);
    }
// heading
    console.log(`|${"-".repeat(width - 2)}|`);
    console.log(`|${"*".repeat(width - 2)}|`);
    console.log(`|${"-".repeat(width - 2)}|`);
// rombus part
    for(let row = 1; row <= n - 1; row++){
        console.log(`|${"-".repeat(((width - startingCurvs) / 2) - row)}${"~".repeat(2 * row)}${"-".repeat(((width - startingCurvs) / 2) - row)}|`);
    }    
    for(let row = 1; row <= n - 2; row++){
        console.log(`|${"-".repeat(1 + row)}${"~".repeat((width - 4) - (2 *row))}${"-".repeat(1 + row)}|`);
    }
    // footer
    //console.log(`\\${".".repeat(width - 1)}\\`);


     for (let row = 0; row < digPartH; row++){
         let line = `${"-".repeat(row)}\\${".".repeat(width - 1)}\\`;
         let merryWidth = 5
         let xmas = ".....";
         if(row == sockIndex){
             line = `${"-".repeat(row)}\\${".".repeat((width - 1 - merryWidth) / 2)}MERRY${".".repeat((width - 1 - merryWidth) / 2)}\\`;
         }
         else if(row == (sockIndex + 2)){
            line = `${"-".repeat(row)}\\${".".repeat((width - 1 - merryWidth) / 2)}X-MAS${".".repeat((width - 1 - merryWidth) / 2)}\\`;
             
         }
         else if(row == digPartH - 1){
            line = `${"-".repeat(row)}\\${"_".repeat(width - 1)})`;
             
         }
         
         console.log(line);
         
         
     }
    
}
solve([5]);