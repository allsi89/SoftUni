function solve(currentYield) {

    let days = 0;
    let total = 0;
    
    while (currentYield >= 100){

        total += currentYield - 26;
        currentYield -=10;
        days++;
    }
    if (total >= 26){
        total-=26;
    }
    console.log(days);
    console.log(total);
}
solve(111);