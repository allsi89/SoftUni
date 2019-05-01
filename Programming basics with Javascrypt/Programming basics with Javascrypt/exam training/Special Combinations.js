function solve([n1, n2, n3]){
n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);

     for(let i = 2; i <= n1; i +=2){
         for(let j = 0; j <= n2; j++){
             if(j == 2 || j == 3 || j == 5 || j == 7){
                 for(let k = 2; k <= n3; k+=2){
                     console.log(`${i} ${j} ${k}`);
                 }
             }
         }
     }
}
solve([8,2,8]);