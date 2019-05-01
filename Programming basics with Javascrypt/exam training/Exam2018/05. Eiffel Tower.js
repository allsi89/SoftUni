function solve(input){
   let n = Number(input[0]);
   let width = 2 * n + 6;

   for(let row = 1; row <= n; row++){
       console.log(`${"-".repeat((width - 2) / 2)}**${"-".repeat((width - 2) / 2)}`);
   }
   for(let row = 1; row <= n - 3; row++ ){
       console.log(`${"-".repeat((width - 4) / 2)}****${"-".repeat((width - 4) / 2)}`);
   }
   console.log(`${"-".repeat((width - 6) / 2)}******${"-".repeat((width - 6) / 2)}`);
   for(let row = 1; row <= n - 4; row++){
    console.log(`${"-".repeat((width - 6) / 2)}**--**${"-".repeat((width - 6) / 2)}`);

   } 
   for(let row = 1; row <= n - 3; row++){
    console.log(`${"-".repeat((width - 8) / 2)}**----**${"-".repeat((width - 8) / 2)}`);
       
   }
   console.log(`${"-".repeat((width - 10) / 2)}**********${"-".repeat((width - 10) / 2)}`);

   for(let row = 0; row <= n - 4; row++){
       let middleDashes = 8;
       let outsideDashes = (width - 12) / 2;
       
       console.log(`${"-".repeat(outsideDashes - row)}**${"-".repeat(middleDashes + row*2)}**${"-".repeat(outsideDashes - row)}`);
      
   }
   console.log(`***${"-".repeat(width - 6)}***`);
}
solve([6]);
