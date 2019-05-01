function solve(input){
   let planet = input[0];
   let days = Number(input[1]);
   let distanceFromEarth = 0;
       if(planet == "Mercury"){
          distanceFromEarth = 0.61
          odo = 2*distanceFromEarth
          if (days <= 7){
            console.log(`Distance: ${odo}`);              
            console.log(`Total number of days: ${(2*(226 * distanceFromEarth) + days).toFixed(2)}`);               
              
          } else {
              console.log("Invalid number of days!");
          }
       }else if (planet == "Venus"){
           distanceFromEarth = 0.28;
           odo = 2 * distanceFromEarth
           if(days <= 14){
            console.log(`Distance: ${odo}`);               
            console.log(`Total number of days: ${(2*(226 * distanceFromEarth) + days).toFixed(2)}`);               
                          
           } else {
              console.log("Invalid number of days!");
               
           }
       }else if (planet == "Mars"){
           distanceFromEarth = 0.52;
           odo = 2 * distanceFromEarth;
           if(days <= 20){
            console.log(`Distance: ${odo}`);               
            console.log(`Total number of days: ${(2*(226 * distanceFromEarth) + days).toFixed(2)}`);               
                          
               
           }else{
              console.log("Invalid number of days!");
               
           }
       }else if(planet == "Jupiter"){
           distanceFromEarth = 4.2;
           odo = 2*distanceFromEarth;
           if(days <= 5){
            console.log(`Distance: ${odo.toFixed(2)}`);               
            console.log(`Total number of days: ${(2*(226 * distanceFromEarth) + days).toFixed(2)}`);               
                           
               
           }else{
            console.log("Invalid number of days!");
               
           }
       }else if(planet == "Saturn"){
           distanceFromEarth = 8.52;
           odo = 2* distanceFromEarth;
           if(days <= 3){
            console.log(`Distance: ${odo}`);               
              console.log(`Total number of days: ${(2*(226 * distanceFromEarth) + days).toFixed(2)}`);               
               
           }else {
            console.log("Invalid number of days!");
               
           }
       }else if (planet == "Uranus"){
           distanceFromEarth = 18.21;
           odo = 2* distanceFromEarth;
           if(days <= 3){
              console.log(`Distance: ${odo}`);   
              console.log(`Total number of days: ${(2*(226 * distanceFromEarth) + days).toFixed(2)}`);               
                           
               
           }else{
                           
            console.log("Invalid number of days!");
               
           }
       }else if(planet == "Neptune"){
           distanceFromEarth = 29.09;
           odo = 2*distanceFromEarth;
           if(days <= 2){
               console.log(`Distance: ${odo}`);
              console.log(`Total number of days: ${(2*(226 * distanceFromEarth) + days).toFixed(2)}`);               
                              
               
           }else{
            console.log("Invalid number of days!");
               
           }
       }else {
           console.log("Invalid planet name!")
       }
       
       
}
solve(["Sun", "3"])