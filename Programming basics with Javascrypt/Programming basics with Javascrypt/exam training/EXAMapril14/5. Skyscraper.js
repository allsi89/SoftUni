function solve(input){
let n = Number(input[0]);
let height = 8 * n - 8;
let width = 2 * n + 1;
let leftRight = n;
let side = n - 2;
let bodyHeight = n * 4 - 1;
let footerheight = n-2;
let roofHeight = (height - bodyHeight - footerheight) / 3; 



    for(let row = 1; row <= roofHeight - 1 ; row++){
        

        console.log(`${" ".repeat(n)}|${" ".repeat(n)}`);
    }
    console.log(`${" ".repeat(n-1)}_|_${" ".repeat(n-1)}`);
 
    for(let row = 1; row <= roofHeight - 1 ; row++){
    console.log(`${" ".repeat(n-1)}|-|${" ".repeat(n-1)}`);
        
    }
    console.log(`${" ".repeat(n - 2)}_|-|_${" ".repeat(n - 2)}`);

    for(let row = 1; row <= roofHeight - 1 ; row++){
        console.log(`${" ".repeat(n-2)}|***|${" ".repeat(n-2)}`);
    }
    console.log(`${" ".repeat(leftRight -1 - side)}${"_".repeat(side - 1)}|***|${"_".repeat(side - 1)}${" ".repeat(leftRight -1 - side)}`)

   //body of building
   
   for(let row = 1; row <= n*4-1; row++){
       let floorindex = n * 4 - 1
       let middle = 3;
       
       console.log(`${" ".repeat((width - middle - side * 2) / 2)}${"|".repeat(side)}${"-".repeat(middle)}${"|".repeat(side)}${" ".repeat((width - middle - side * 2) / 2)}`);
   }
       console.log(`_${"|".repeat(side)}${"-".repeat(3)}${"|".repeat(side)}_`)
        //footer
       for(let row = 1; row <= n - 2; row++){
        console.log(`${"|".repeat(width)}`)

       }
   
}
solve([5]);