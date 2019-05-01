function fruitShop([fruit, dayOfWeek, quantity]) {
   quantity = Number(quantity);
   let price = -1;
   let isWeekend = dayOfWeek == "Saturday" || dayOfWeek == "Sunday";
   let isAtWeek = dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" || dayOfWeek == "Friday";
   
   if (isAtWeek) {
       if (fruit == "banana") {
           price = 2.5;
       } else if (fruit == "apple") {
           price = 1.2;
       } else if (fruit == "orange") {
           price = 0.85;
       } else if (fruit == "grapefruit") {
           price = 1.45;
       } else if (fruit == "kiwi") {
           price = 2.7;
       } else if (fruit == "pineapple") {
           price = 5.5;
       } else if (fruit == "grapes") {
           price = 3.85;
       } else {
           console.log("error");
       }
   } else if (isWeekend) {
       if (fruit == "banana") {
        price = 2.7;
       } else if (fruit == "apple") {
        price = 1.25;
       } else if (fruit == "orange") {
        price = 0.9;
       } else if (fruit == "grapefruit") {
        price = 1.6;
       } else if (fruit == "kiwi") {
        price = 3.0;
       } else if (fruit == "pineapple") {
        price = 5.6;
       } else if (fruit == "grapes") {
        price = 4.2;
       } else {
           console.log("error");  
       }
   } else {
      console.log("error");       
   } if (price != -1) {
       console.log(price * quantity);
   }
}
fruitShop(["apple", "Tuesday", 2]);