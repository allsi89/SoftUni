function solve([n]){
    n = Number(n);
    let width = (2 * n) + 2;
    let leftRight = n;
   // mask roof
   console.log(`${" ".repeat(leftRight - 2)}/|${" ".repeat(2)}|\\${" ".repeat(leftRight - 2)}`);
   
   for(let row = 1; row <= n - 2; row++){
    console.log(`${" ".repeat(leftRight - 2 - row)}/${" ".repeat(row)}|${" ".repeat(2)}|${" ".repeat(row)}\\${" ".repeat(leftRight - 2 - row)}`);
       
   }
   //mask body
   console.log("-".repeat(width));
   console.log(`|${" "}_${" ".repeat(width - 6)}_${" "}|`);
   console.log(`|${" "}@${" ".repeat(width - 6)}@${" "}|`);
   for(let row = 1; row <= Math.floor(n / 2); row++){
       console.log(`|${" ".repeat(width - 2)}|`);
   }
   console.log(`|${" ".repeat(leftRight - 1)}OO${" ".repeat(leftRight - 1)}|`);
   console.log(`|${" ".repeat(leftRight -2)}/${"  "}\\${" ".repeat(leftRight - 2)}|`);
   console.log(`|${" ".repeat((width - 6) / 2)}||||${" ".repeat((width - 6) / 2)}|`);
   //mask bottom
    for (let row = 1; row <= n; row++){
        console.log(`${"\\".repeat(row)}${"`".repeat(width - 2 * row)}${"/".repeat(row)}`);
    }   
    console.log(`${"\\".repeat(width / 2)}${"/".repeat(width / 2)}`);
}
solve([5]);