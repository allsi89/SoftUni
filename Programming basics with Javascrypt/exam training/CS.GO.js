function solve(args){
   let n = Number(args[0]);
   let sum = 0;
   let weaponsCount = 0;
   let cash = Number(args[1]);
   let diff = 0;
   
   for(let i = 2; i <= n + 1; i++){
       let weapon = args[i];
        
       if (weapon == "ak47"){
          sum += 2500;
          weaponsCount++;
       } 
       else if (weapon == "awp"){
           sum += 4750;
          weaponsCount++;
           
       }
       else if (weapon == "sg553"){
           sum += 3500;
          weaponsCount++;
           
       }
       else if (weapon == "grenade"){
           sum += 300;
          weaponsCount++;
           
       }
       else if (weapon == "flash"){
           sum += 250;
          weaponsCount++;
           
       }
       else if (weapon == "glock"){
           sum += 500;
          weaponsCount++;
           
       }
       else if (weapon == "bazooka"){
           sum += 5600;
          weaponsCount++;
               
       }
       
       
   }
   //console.log(sum);
   if(n + 1 > 7){
       console.log("Sorry, you can't carry so many things!");
   } 
   else if(cash < sum){
       diff = sum - cash;
       console.log(`Not enough money! You need ${diff} more money.`);
   }
   else if(cash >= sum && weaponsCount <= 7){
       console.log(`You bought all ${weaponsCount} items! Get to work and defeat the bomb!`);
} 
}
solve(["3", "4150", "sg553", "glock"]);