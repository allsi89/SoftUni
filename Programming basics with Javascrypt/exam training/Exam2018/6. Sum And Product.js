function solve([n]){

    n = Number(n);

   for(let a = 1; a <= 9; a++){
       for(let b = 9; b >= a; b--){
           for(let c = 0; c <= 9; c++){
               for(let d = 9; d >= c; d--){
                   let sum = a + b + c + d;
                   let summary = a * b * c * d;
                  
                   if(sum == summary && n % 10 == 5){
                      console.log(`${a}${b}${c}${d}`);
                      return;
                   }else if ((Math.trunc((a * b * c * d) / (a + b + c + d)) == 3) && n % 3 == 0){
                       console.log(`${d}${c}${b}${a}`);
                       return;
                   } else {
                       
                   }
               }
           }
       }
   }
   console.log("Nothing found");
   
}
solve([123]);