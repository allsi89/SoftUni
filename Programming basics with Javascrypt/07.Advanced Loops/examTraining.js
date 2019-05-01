function solve([arg1, arg2, arg3, arg4]){
   let score = Number(arg1);
   let arena = arg2;
   let day = arg3;
   let itemCondition = arg4;
   let itemsPrice = 0;  
   let onePartPrice = 0;
   let itemsCount = 0;   
   let scoreLeft = 0;
   
    if(day == "Monday" || day == "Wednesday"){
        if(itemCondition == "Poor"){
            itemsPrice = 7000 - (7000 * 0.05);
            onePartPrice = itemsPrice / 5;

        } else if(itemCondition == "Normal"){
            itemsPrice = 14000 - (14000 * 0.05);
            onePartPrice = itemsPrice / 5;
            
        } else if(itemCondition == "Legendary"){
            itemsPrice = 21000 - (21000 * 0.05);
            onePartPrice = itemsPrice / 5;            
        }
    } else if(day == "Tuesday" || day == "Thursday"){
        if(itemCondition == "Poor"){
            itemsPrice = 7000 - (7000 * 0.10);
            onePartPrice = itemsPrice / 5;

        } else if(itemCondition == "Normal"){
            itemsPrice = 14000 - (14000 * 0.10);
            onePartPrice = itemsPrice / 5;
            
        } else if(itemCondition == "Legendary"){
            itemsPrice = 21000 - (21000 * 0.10);
            onePartPrice = itemsPrice / 5;            
        }
    } else if(day == "Friday" || day == "Saturday"){
        if(itemCondition == "Poor"){
            itemsPrice = 7000 - (7000 * 0.07);
            onePartPrice = itemsPrice / 5;

        } else if(itemCondition == "Normal"){
            itemsPrice = 14000 - (14000 * 0.07);
            onePartPrice = itemsPrice / 5;
            
        } else if(itemCondition == "Legendary"){
            itemsPrice = 21000 - (21000 * 0.07);
            onePartPrice = itemsPrice / 5;            
        }
           
    }
    itemsCount = Math.floor(score / onePartPrice);   
    //scoreLeft = score - (itemsCount * onePartPrice);
    
    if (itemsCount > 4){
        scoreLeft = score - itemsPrice;
        console.log(`Items bought: 5`);
        console.log(`Arena points left: ${scoreLeft}`);
        console.log("Success!");
  
     } else if (itemsCount < 5){
         scoreLeft = score - (itemsCount *onePartPrice);
        console.log(`Items bought: ${itemsCount}`);
        console.log(`Arena points left: ${scoreLeft}`);
        console.log("Failure!");
     }
}
solve([10000, "Nagrand", "Monday", "Legendary"]);
