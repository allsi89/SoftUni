function solve([a, b, max]){
    a = Number(a);
    b = Number(b); 
    max = Number(max);
   let counter = 0;
   let m = 33;
   let n = 58;

      for(let x = 1; x <= a; x++){
          for(let y = 1; y <= b; y++){
              if (counter >= max){
                  break;
              }
              if(m > 47){
                  m = 33;
              }
              if(n > 64){
                  n = 58;
              }
              console.log(`${String.fromCharCode(m)}${String.fromCharCode(n)}${x}${y}${String.fromCharCode(n)}${String.fromCharCode(m)}`);
              m++;
              n++;
              counter++;
          }
      }
    
 
   
 
 }
solve([2,3,10]);