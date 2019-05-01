function solve([imput]){
    let n = Number(imput);
    let width = 5 * n;
    let glassWidth = 2 * n;
    let height = n;
    let frame = " ".repeat(n);
    let frameIndex = Math.floor(n / 2 - 1);
    if (n % 2 == 0){
       // frameIndex = Math.floor(n / 2 - 1) - 1;
        frameIndex = n - 3  ;
    }
    // printing the top line
    console.log(`${"*".repeat(glassWidth)}${" ".repeat(n)}${"*".repeat(glassWidth)}`);
    // printing body section
    for(let row = 0; row < height - 2; row++){
        
       if(row == frameIndex){
          frame = "|".repeat(n);
       }
       else {
           frame = " ".repeat(n);
       }
           console.log(`*${"/".repeat(glassWidth - 2)}*${frame}*${"/".repeat(glassWidth - 2)}*`);
        
    }    // bottom
        console.log(`${"*".repeat(glassWidth)}${" ".repeat(n)}${"*".repeat(glassWidth)}`);
        
}
solve([5]);