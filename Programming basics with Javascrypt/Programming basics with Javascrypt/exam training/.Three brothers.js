function solve([arg1,arg2,arg3,arg4]){
let firstBrotherTime = Number(arg1);
let secondBrotherTime = Number(arg2);
let thirdBrotherTime = Number(arg3);
let timeSum = 1/(1/firstBrotherTime + 1/secondBrotherTime + 1/thirdBrotherTime);
let timeWithRest = timeSum * 1.15;
let fathersTime = Number(arg4);
console.log(`Cleaning time: ${(timeWithRest.toFixed(2))}`);
     if (fathersTime > timeWithRest){
         console.log(`Yes, there is a surprise - time left -> ${Math.floor(fathersTime - timeWithRest)} hours.`);
     }
     else {
         console.log(`No, there isn't a surprise - shortage of time -> ${Math.ceil(timeWithRest - fathersTime)}`);
     }
}
solve([3.2,2.5,1.24,0.5]);