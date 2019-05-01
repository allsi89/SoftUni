function solve(args){
   let n = Number(args[0]);
   let firstDay = Number(args[1]);
   let sum = 0;
   let currentDay = 0;
  // let boost = 0;
   for(let i = 2; i <= n + 1; i++){
        let boost = Number(args[i]);
       currentDay = (boost/100) * firstDay; 
       firstDay += currentDay;
       sum += firstDay;
       //console.log(currentDay);
       //console.log(firstDay);     
   }
   sum += args[1];
   //console.log(sum);
   if(sum < 1000){
    console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - sum)} more kilometers`);
   }
   else if (sum >= 1000){
     console.log(`You've done a great job running ${Math.ceil(sum - 1000)} more kilometers!`)
   }
    
  
}
solve([4, 100, 30, 50, 60, 80]);