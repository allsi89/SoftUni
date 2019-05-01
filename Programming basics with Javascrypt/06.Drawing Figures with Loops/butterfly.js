function solve([n]){
   n = Number(n);
   let flywidth = 2 * (n - 1);
   let flyheight = (2 * (n - 2)) + 1;
   let leftRightWing = "-";
   let flyRoof = "\\ /";
   let flyBottom = "/ \\"
   let wingWidth = n - 2;

   for(let row = 1; row <= n - 2; row++){
      if (row % 2 == 1){
          leftRightWing = "*".repeat(wingWidth);
      }
      else {
          leftRightWing = "-".repeat(wingWidth);
      }
      console.log(`${leftRightWing}${flyRoof}${leftRightWing}`);
      
   }
      console.log(`${" ".repeat(wingWidth + 1)}@`);
    for(let row = 1; row <= n - 2; row++){
        if (row % 2 == 1){
            leftRightWing = "*".repeat(wingWidth);
        }
        else {
            leftRightWing = "-".repeat(wingWidth);
        }
      console.log(`${leftRightWing}${flyBottom}${leftRightWing}`);
    
    }          
}
solve([3]);