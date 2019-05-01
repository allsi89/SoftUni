function solve([n]){
   n = Number(n);
   let num = 1;
   while (num <= n){
       console.log(num);
       num = num * 2 + 1;
   } 
}
solve([17]);