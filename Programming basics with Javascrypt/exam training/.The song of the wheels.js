function solve([m]){
   M = Number(m);
   
   
   let counter = 0;
   for(let i = 1; i <= 9; i++){

       for(let j = 1; j <= 9; j++){

            for(let k = 1; k <= 9; k++){

                for(let z = 1; z <= 9; z++){
                    if(i < j && k > z ){
                        if((i*j)+(k*z) == M){
                            let combination = `${i} ${j} ${k} ${z}`
                          console.log(combination);
                          counter++;
                          if (counter == 4){
                              
                            console.log(`Password: ${i}${j}${k}${z}`);
                        }
                        }
                         
                    }
                   
                    
                }
            }
       }
       
    } 
    
}
solve([55]);