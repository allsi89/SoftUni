function solve(input){
    let n = Number(input[0]);
    let numberOfExams = n;
    let score = 0;
    let credits = 0;
  

    for(let i = 1; i <= numberOfExams; i++){
        let currentNum = Number(input[i]);
        let creditString = "" + currentNum;
       // let curentCredits = Number(creditString[0] + creditString[1]);
        let curentCredits = Number(creditString.slice(0, -1))
        let currentScore = currentNum % 10;
         
        if(currentScore == 3){
           curentCredits *= 0.50;
        } else if (currentScore == 4){
            curentCredits *= 0.70;
        } else if( currentScore == 5){
            curentCredits *= 0.85
        } else if(currentScore == 6){
            currentScore *= 1;
        }else if(currentScore < 3){
            curentCredits *= 0;
        }
        
        credits += curentCredits;
        score += currentScore;
    }

    console.log(credits.toFixed(2));
    
    console.log((score / numberOfExams).toFixed(2));

}
solve([2,204,206]);