function solve([n]){
   n = Number(n);
   let width = (2 * n) + 1;
   let bladeWidth = n;
   if(n % 2 == 0){
       bladeWidth++;
   }
   let reminderWidth = width - bladeWidth -2;

   //roof
   console.log(`${"#".repeat(n - 1)}/^\\${"#".repeat(n - 1)}`);

   for(let row = 1; row <= Math.floor(n / 2); row++){
       console.log(`${"#".repeat(n - 1 - row)}.${" ".repeat(1 + 2 * row)}.${"#".repeat(n - 1 - row)}`);
   }
   //middle
   let soft = "SOFT";
   let uni = "UNI";
   //SOFT part
   for (let row = 0; row < 4; row++){
       console.log(`${"#".repeat(reminderWidth / 2)}|${" ".repeat((bladeWidth - 1) / 2)}${soft[row]}${" ".repeat((bladeWidth - 1) / 2)}|${"#".repeat(reminderWidth / 2)}`)
   }
   //space between SOFT and UNI
   for (let row = 0; row < Math.max(n - 4, 1); row++){
    console.log(`${"#".repeat(reminderWidth / 2)}|${" ".repeat((bladeWidth - 1) / 2)} ${" ".repeat((bladeWidth - 1) / 2)}|${"#".repeat(reminderWidth / 2)}`)
   }

   //UNI part
   for (let row = 0; row < 3; row++){
    console.log(`${"#".repeat(reminderWidth / 2)}|${" ".repeat((bladeWidth - 1) / 2)}${uni[row]}${" ".repeat((bladeWidth - 1) / 2)}|${"#".repeat(reminderWidth / 2)}`)
   }
   console.log(`@${"=".repeat(width -2)}@`)

   //bottom
   let hashTagCount = (reminderWidth / 2) + 2;
   for (let row = 0; row < Math.floor(n / 2); row++){
    console.log(`${"#".repeat(hashTagCount)}|${" ".repeat(width -(2 * hashTagCount + 2))}|${"#".repeat(hashTagCount)}`);
   }
    console.log(`${"#".repeat(hashTagCount)}\\${".".repeat(width -(2 * hashTagCount + 2))}/${"#".repeat(hashTagCount)}`);
    
}
solve([10]);