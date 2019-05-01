function solve([imput]){
    let n = Number(imput);
    let interval = " ";
    for(let row = 1; row <= n; row++){
        console.log(`${interval.repeat(n - row)}${"* ".repeat(row)}${interval.repeat(n - row)}`);
    }
        
    for(let row = 1; row <= n; row++){
        console.log(`${interval.repeat(row)}${"* ".repeat(n - row)}${interval.repeat(row)}`);
    }    
    
}
solve([5]);