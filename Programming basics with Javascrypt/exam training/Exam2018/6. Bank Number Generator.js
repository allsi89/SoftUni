function bankNumberGen([a, b , c, d, e, n]) {
     a = Number(a);
     b = String(b);
     c = String(c);
     d = String(d);
     e = Number(e);
     n = Number(n);
    let validNumCounter = 0;
   
   
    for (let i = a; i <= 99; i++) {
        for (let j = b.charCodeAt(0); j <= 'Z'.charCodeAt(0); j++) {
            for (let k = c.charCodeAt(0); k <= 'z'.charCodeAt(0); k++) {
                for (let o = d.charCodeAt(0); o <= 'Z'.charCodeAt(0); o++) {
                    for (let p = e; p >= 10; p--) {
                        if (i % 10 == 2 && p % 10 == 5) {
                            
                            validNumCounter += 1;
                            if (validNumCounter == n){
                            console.log(`${i}${String.fromCharCode(j)}${String.fromCharCode(k)}${String.fromCharCode(o)}${p}`);
                               

                            }
                            
                        }
                      
                           
                        
                    }
                }
            }
        }
    }
}
bankNumberGen([12,'A','b','C',45,8])