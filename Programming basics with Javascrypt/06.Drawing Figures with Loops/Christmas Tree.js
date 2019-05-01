function solve([num]){
    let n = Number(num);
    console.log(`${" ".repeat(n)}${" "}${"|"}`);
    for(let row = 0; row < n; row++){
        console.log(`${" ".repeat(n - 1 - row)}${"*".repeat(row + 1)}${" | "}${"*".repeat(row + 1)}${" ".repeat(n - 1 - row)}`);
    }
}
solve([3]);