function solve([imput]){
    
   let n = Number(imput);
   if (n <= 2){
       console.log("*".repeat(n));
       return;
   }
   let roofStars = 1;
   let height = Math.floor(n / 2);
   let midDashes = "-";
   if (n % 2 == 0){
       roofStars = 2;
       height = (n / 2) - 1;
       midDashes = "--";
   }
   let dashes = (n - roofStars) / 2;
   console.log("-".repeat(dashes) + "*".repeat(roofStars) + "-".repeat(dashes));
   for(let row = 1; row < height; row++){
       console.log("-".repeat(dashes - row) + "*" + midDashes + "*" + "-".repeat(dashes - row));
       midDashes += "--";
   }
       console.log(`*${midDashes}*`);

   for(let row = 1; row < height; row++){
       console.log("-".repeat(row) + "*" + "-".repeat(n - 2 - row * 2) + "*" + "-".repeat(row));
   }
       console.log("-".repeat(dashes) + "*".repeat(roofStars) + "-".repeat(dashes));
}
solve([13]);