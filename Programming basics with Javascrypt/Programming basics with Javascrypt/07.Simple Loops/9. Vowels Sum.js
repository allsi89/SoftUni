function solve([string]){
    let n = string.length;
    let sum = 0;
    for(let i = 0; i < n; i++){
        let currentChar = string[i];
        if (currentChar == 'a'){
            sum += 1;
        }
        else if (currentChar == 'e'){
            sum += 2;
        }
        else if (currentChar == 'i'){
            sum += 3;
        }
        else if (currentChar == 'o'){
            sum += 4;
        }
        else if (currentChar == 'u'){
            sum += 5;
        }
       
    }
    console.log(sum);
}
solve(["hello"]);