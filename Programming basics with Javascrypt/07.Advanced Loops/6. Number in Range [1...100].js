function solve(args){
   let i = 0;
   let n = Number(args[i]);
   while(n < 1 || n > 100){
       i++;
       console.log("Invalid Number")
        n = Number(args[i]);
   }
       console.log(`The number is ${n}`);
}
solve([-1, 200, -19, 60]);