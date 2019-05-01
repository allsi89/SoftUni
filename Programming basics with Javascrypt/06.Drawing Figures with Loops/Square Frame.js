function solve([num]){
    let n = Number(num);
    console.log(`+ ${"- ".repeat(n - 2)}+ `)
    for(let row = 0; row < n - 2; row++){
        console.log(`| ${"- ".repeat(n - 2)}| `)
        
    }
    console.log(`+ ${"- ".repeat(n - 2)}+ `)
    
}
solve([8]);