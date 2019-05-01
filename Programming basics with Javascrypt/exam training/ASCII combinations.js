function solve(args){
    let n = Number(args[0]);
    let ascii = 0;
    // sum of ascii values
    let lowerCaseSum = 0;
    let upperCaseSum = 0;
    let digitSum = 0;
    let otherSum = 0;
    //let maxSum = Math.max(upperCaseSum, lowerCaseSum, digitSum, otherSum);
    // sum of charachters
    let lowDigits = "";
    let upDigits = "";
    let digits = "";
    let others = "";
    let currentChar = "";
    
    for(let i = 1; i <= n; i++){
          currentChar = args[i];
                  
        ascii = currentChar.charCodeAt();
       
            if (ascii >= 97 && ascii <= 122){
                lowDigits += currentChar; 
                lowerCaseSum += ascii;
               // console.log(lowerCaseSum + " " + currentChar);
                
        
            } else if(ascii >= 65 && ascii <= 90){
                upDigits += currentChar;
                upperCaseSum += ascii;
               // console.log(upperCaseSum + " " + currentChar);
                
            } else if(ascii >= 48 && ascii <= 57){
                digitSum += ascii;  
                digits += currentChar;              
                
               // console.log(digitSum + " " + currentChar);
                
            } else {
                otherSum += ascii;
                others += currentChar;
                //console.log(otherSum + currentChar);
            }
    }
    if (upperCaseSum > lowerCaseSum && upperCaseSum > otherSum && upperCaseSum > digitSum){
        console.log(upperCaseSum);
        console.log(upDigits);        
    } else if(otherSum > upperCaseSum && otherSum > lowerCaseSum && otherSum > digitSum){
        console.log(otherSum);
        console.log(others);        
    } else if (digitSum > upperCaseSum && digitSum > lowerCaseSum && digitSum > otherSum){
        console.log(digitSum);      
        console.log(digits);
    } else {
        console.log(lowerCaseSum);
        console.log(lowDigits);
    }
        
    
}
solve([`3`, `C`, `+`, `+`, `]`, `7`]);
