function solve([imput]){
   let n = Number(imput);
   let roofStars = 1;
   if (n % 2 == 0){
       roofStars = 2;
   }
   
   for (let row = 0; row < Math.ceil(n / 2); row++){
      console.log(`${"-".repeat(((n - roofStars) / 2) - row)}${"*".repeat(roofStars + 2 * row)}${"-".repeat(((n - roofStars) / 2) - row)}`);
   }
   for(let row = 0; row < Math.floor(n / 2); row++){
      console.log(`|${"*".repeat(n - 2)}|`);
   }
}
solve([5]);