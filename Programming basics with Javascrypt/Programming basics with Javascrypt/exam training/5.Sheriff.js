function solve([n]){
  n = Number(n);
  let width = 3 * n;
  let height = 2 * n + 8;
  let leftRight = (width - 1) / 2;
    //up part 
    console.log(`${".".repeat(leftRight)}X${".".repeat(leftRight)}`);
    console.log(`${".".repeat(leftRight - 1)}/X\\${".".repeat(leftRight - 1)}`);
    console.log(`${".".repeat(leftRight - 1)}X|X${".".repeat(leftRight - 1)}`);
      
    for(let row = 1; row < Math.ceil(n/2); row++ )
       console.log(`${".".repeat(leftRight +1 - n - row)}${"X".repeat((n - 1) + row)}|${"X".repeat((n - 1)+ row)}${".".repeat(leftRight + 1 - n - row)}`);
       console.log(`${"X".repeat(leftRight)}|${"X".repeat(leftRight)}`);
    for(let row = 1; row < Math.ceil(n/2); row++ ) {
        console.log(`${".".repeat(row)}${"X".repeat(leftRight - row)}|${"X".repeat(leftRight - row)}${".".repeat(row)}`);
    }  
    //midlle part
    console.log(`${".".repeat(leftRight - 1)}/X\\${".".repeat(leftRight - 1)}`);
    console.log(`${".".repeat(leftRight - 1)}\\X/${".".repeat(leftRight - 1)}`);
    //down side
    for(let row = 1; row < Math.ceil(n/2); row++ )
    console.log(`${".".repeat(leftRight +1 - n - row)}${"X".repeat((n - 1) + row)}|${"X".repeat((n - 1)+ row)}${".".repeat(leftRight + 1 - n - row)}`);
    console.log(`${"X".repeat(leftRight)}|${"X".repeat(leftRight)}`);
 for(let row = 1; row < Math.ceil(n/2); row++ ) {
     console.log(`${".".repeat(row)}${"X".repeat(leftRight - row)}|${"X".repeat(leftRight - row)}${".".repeat(row)}`);
 }
 console.log(`${".".repeat(leftRight - 1)}\\X/${".".repeat(leftRight - 1)}`);
 console.log(`${".".repeat(leftRight)}X${".".repeat(leftRight)}`);
 
}
solve([5]);