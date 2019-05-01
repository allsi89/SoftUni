function solve([n]){
   n = Number(n);
   let isPrime = true;
   for(let i = 0; i <= Math.sqrt(n); i++){
       if(n % i == 0){
           isPrime = false;
           break;
       }
   }
   if(isPrime && n > 0){
       console.log("Prime");
   } else {
       console.log("Not prime");
   }
}
solve([13]);