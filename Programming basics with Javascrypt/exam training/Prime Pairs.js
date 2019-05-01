function solve([firstNum, secondNum, increaseFirst, increaseSecond]){
     firstNum = Number(firstNum);
     secondNum = Number(secondNum);
     increaseFirst = Number(increaseFirst);
     increaseSecond = Number(increaseSecond);

     let maxFirst = firstNum + increaseFirst;
     let maxSecond = secondNum + increaseSecond;

     for(let i = firstNum; i <= maxFirst; i++){
         for(let j = secondNum; j <= maxSecond; j++){
             let isFirstNumberPrime = true;
             let isSecondNumberPrime = true;
             for(let k = 2; k <= Math.sqrt(i); k++){
                 if (i % k == 0){
                     isFirstNumberPrime = false;
                     break;
                 }
             }
             for(let k = 2; k <= Math.sqrt(j); k++){
                 if(j % k == 0){
                     isSecondNumberPrime = false;
                     break;
                 }
             }
             if(isFirstNumberPrime && isSecondNumberPrime){
                 console.log(`${i}${j}`);
             }
         }
     }
}
solve([10,30,9,6])