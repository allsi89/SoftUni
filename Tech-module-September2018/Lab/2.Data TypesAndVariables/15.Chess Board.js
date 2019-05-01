function solve(n) {

    let height = n;

    console.log(`<div class="chessboard">`);
    if (n % 2 === 1){
        while (height > 0){
            console.log("  <div>");

            if (height % 2 === 1){
                for (let i = 1; i <= n ; i++) {

                    if (i % 2 === 1){
                        console.log(`    <span class="black"></span>`);
                    }else{
                        console.log(`    <span class="white"></span>`);
                    }
                }
                height--;
            } else{
                for (let i = 1; i <= n ; i++) {

                    if (i % 2 === 1){
                        console.log(`    <span class="white"></span>`);
                    }else{
                        console.log(`    <span class="black"></span>`);
                    }
                }
                height--;
            }

            console.log("  </div>");
        }
    }else{
        while (height > 0){
            console.log("  <div>");

            if (height % 2 === 0){
                for (let i = 1; i <= n ; i++) {

                    if (i % 2 === 1){
                        console.log(`    <span class="black"></span>`);
                    }else{
                        console.log(`    <span class="white"></span>`);
                    }
                }
                height--;
            } else{
                for (let i = 1; i <= n ; i++) {

                    if (i % 2 === 1){
                        console.log(`    <span class="white"></span>`);
                    }else{
                        console.log(`    <span class="black"></span>`);
                    }
                }
                height--;
            }

            console.log("  </div>");
        }
    }
    console.log(`</div>`);
}
solve(2);