function solve([n]){
    n = Number(n);
    let width = n + 5;
    let leftRight = (width - 1) / 2;
    //Arrow edge
    console.log(`${"_".repeat(leftRight)}^${"_".repeat(leftRight)}`);
    console.log(`${"_".repeat(leftRight - 1)}/|\\${"_".repeat(leftRight - 1)}`);
    console.log(`${"_".repeat(leftRight - 2)}/|||\\${"_".repeat(leftRight - 2)}`);
     
    for(let row = 1; row <= n / 2 - 1; row++){
        console.log(`${"_".repeat(leftRight - 2 - row)}/${".".repeat(row)}|||${".".repeat(row)}\\${"_".repeat(leftRight - 2 - row)}`)
    }
       console.log(`${"_".repeat((width - 9) / 2)}/..|||..\\${"_".repeat((width - 9) / 2)}`);
       console.log(`${"_".repeat((width - 7) / 2)}/.|||.\\${"_".repeat((width - 7) / 2)}`);
    //Arrow body
    for(let row = 1; row <= n; row++){
        console.log(`${"_".repeat((width - 3) / 2)}|||${"_".repeat((width - 3) / 2)}`);
    }         
    console.log(`${"_".repeat((width - 3) / 2)}~~~${"_".repeat((width - 3) / 2)}`);
    //Arrow bottom 
    for(let row = 1; row <= n / 2; row++){
        console.log(`${"_".repeat(((width - 3) / 2) - row)}//${".".repeat(row-1)}!${".".repeat(row-1)}\\\\${"_".repeat(((width - 3) / 2) - row)}`);
    }
}
solve([8]);