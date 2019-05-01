function solve([n1,upCase,lowCase,n2,n3,n4,n5]) {
    let alphaUp = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let alphaLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    n1 = Number(n1)
    n2 = Number(n2)
    n3 = Number(n3)
    n4 = Number(n4)
    n5 = Number(n5)
    upCase = upCase.toUpperCase()
    lowCase = lowCase.toLowerCase()
    let password = [];
    
   let upCasePosition = 0;
   let lowCasePosition = 0;
   // finding the upper case letter
    for (let x = 0; x < alphaUp.length;x++) {
      if (upCase == alphaUp[x]) {
        upCasePosition = x
      }
    }
    // finding the lower case letter
    for (let x = 0; x < alphaLow.length;x++) {
      if (lowCase == alphaLow[x]) {
        lowCasePosition = x
      }
    }
   let thisM = 0;
    for (let a = 1;a <= n1;a++) {
      
      for (let b = 0;b <= upCasePosition;b++) {
        
       for (let c = 0;c <= lowCasePosition;c++) {
        
         for (let d = 1;d <= n2;d++) {
          
           for (let e = 1;e <= n3;e++) {
            
             for (let f = 1;f <= n4;f++) {
               thisM += 1
               if (thisM == n5){
                 password.push(a + alphaUp[b] + alphaLow[c] + d + e + f)
               }
    }
    }
    }
    }
    }
    }
    
    if (n5 <= thisM) {
   //1Aa82542
    console.log(password[0])
    } else {
      console.log("No password on this position")
    }
   }
solve(["6","f","l","9","33","88","22482"]);