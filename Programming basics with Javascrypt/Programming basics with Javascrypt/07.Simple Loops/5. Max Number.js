function maxNumber(args){
    let n = Number(args[0]);
    let max = Number(args[1]);

    for(let i = 1; i <= n; i++) {
        let num = Number(args[i]);
        if (num > max){
            max = num;
        }
        
    } 
        console.log(max);
}
maxNumber(["3", "-20", "40", "-50"]);