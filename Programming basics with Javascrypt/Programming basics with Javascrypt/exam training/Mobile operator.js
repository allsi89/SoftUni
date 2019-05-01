function solve([arg1,arg2,arg3,arg4]){
   let srokDogovor = arg1;
   let mobilePlan = arg2;
   let web = arg3;
   let months = Number(arg4);
   let price = 0;
   let webPrice = 0;

   if(srokDogovor == "one"){
       if(mobilePlan == "Small"){
          price += 9.98;
          
       } else if(mobilePlan == "Midlle"){
           price += 18.99;
       } else if(mobilePlan == "Large"){
           price += 25.98;
       } else if(mobilePlan == "ExtraLarge"){
           price += 35.99;
       }
   } else if(srokDogovor == "two"){
      if(mobilePlan == "Small"){
        price += 8.58;
       } else if(mobilePlan == "Midlle"){
         price += 17.09;
       } else if(mobilePlan == "Large"){
         price += 23.59;
       } else if(mobilePlan == "ExtraLarge"){
         price += 31.79;
       }
   } if( price <= 10){
       webPrice += 5.50;
   } else if (price <= 30 ){
       webPrice += 4.35;
   } else if(price > 30){
       webPrice += 3.85;
   } 
   console.log((price + webPrice) * months);
}
solve(["two", "Large","no","10"]);