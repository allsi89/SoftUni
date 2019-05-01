function solve(input){
    let gender = input[0];
    let weight = Number(input[1]);
    let heightInMeters = Number(input[2]);
    let age = Number(input[3]);
    let PerformanceRate = input[4];

    let bnmForMen = 66 + (13.7 * weight) + (5 * (heightInMeters * 100)) - (6.8 * age);
    let bnmForWomen = 655 + (9.6 * weight) + (1.8 * (heightInMeters * 100)) - (4.7 * age);
    
    let calories = 0;

    if(gender == 'm'){
        if(PerformanceRate == "sedentary"){
            calories += bnmForMen * 1.2;
        }
        else if(PerformanceRate == "lightly active"){
            calories += bnmForMen * 1.375;
        }
        else if (PerformanceRate == "moderately active"){
            calories += bnmForMen * 1.55;
            
        }
        else if(PerformanceRate == "very active"){
            calories += bnmForMen * 1.725;
            
        }
    }
    else if(gender == 'f'){
        if(PerformanceRate == "sedentary"){
            calories += bnmForWomen * 1.2;
        }
        else if(PerformanceRate == "lightly active"){
            calories += bnmForWomen * 1.375;
        }
        else if (PerformanceRate == "moderately active"){
            calories += bnmForWomen * 1.55;
            
        }
        else if(PerformanceRate == "very active"){
            calories += bnmForWomen * 1.725;
        }    
    }
  console.log(`To maintain your current weight you will need ${Math.ceil(calories)} calories per day.`);
}
solve(['m', 75, 1.72, 22, "very active"])