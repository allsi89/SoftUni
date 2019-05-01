function solve([n]){
    n = Number(n);
    let digit = 1;

    for(let row = 1; row <= n; row++){
       let text = '';
       for(let col = row; col < row + n; col++) {
           if(col <= n) {
               digit = col;
           } else {
               digit--;
           }
           text += digit + " ";
       }
           console.log(text);
    
    }
}
solve([7]);