function solve(args){
    
 
        let numberPassengers = Number(args[0])
        let busStops = Number(args[1]);
        let leftPassangers = numberPassengers;
        let s = 0;
        let k = 0;
        
        for(let i = 2; i <= busStops * 2 + 1; i++) {
           
            if(i % 2 == 0){
                s += Number(args[i]);
                
            } else {
                k += Number(args[i]);
            }
            
          
            
        } 
        if(busStops % 2 == 1){
            leftPassangers += 2
        } 
        leftPassangers = (leftPassangers + k) - s;
        console.log("The final number of passengers is : " + leftPassangers);
     

}
solve([20,2,10,5,5,3]);