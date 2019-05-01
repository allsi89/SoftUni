function solve(input){
   let daysForRun = Number(input[0]);
   

   let totalDistance = 0;
   let totalTime = 0;
   let totalCalories = 0;
   let count1 = 1;
   let count2 = 2;
   let count3 = 3;
   for(let i = 1; i <= daysForRun; i++ ){
       var curentTime = Number(input[count1]);
       totalTime += curentTime
       var curentdistance = Number(input[count2]);
       let unit = input[count3];
       if(unit == "km"){
        curentdistance *= 1;
       totalDistance += curentdistance;
        
       }
        else if(unit == "m"){
        curentdistance *= 0.001;
       totalDistance += curentdistance;
        
       }
       
         totalCalories += (curentTime * 400) / 20;
         count1 += 3;
         count2 += 3;
      
   }
    console.log(`He ran ${totalDistance.toFixed(2)}km for ${totalTime} minutes and burned ${totalCalories} calories.`);
}
solve([2, "20", "2000", "m", "20", "2000", "km"]);