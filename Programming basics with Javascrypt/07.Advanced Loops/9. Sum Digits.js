function solve ([n]){
    n = Number(n);
    let result = n % 10;
    n = parseInt(n / 10);
    while(n > 0){
        result += n % 10;
        n = parseInt(n / 10);
    }
    console.log(result);
}
solve(["5634"]);