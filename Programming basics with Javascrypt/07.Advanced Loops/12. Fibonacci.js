function solve([n]){
    n = Number(n);
    let f1 = 1;
    let f2 = 1;
    for(let i = 2; i <= n; i++){
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
    console.log(f2);
} 
solve([15]);