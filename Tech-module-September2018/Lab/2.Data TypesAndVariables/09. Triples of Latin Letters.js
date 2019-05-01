function solve(n) {

    for (let i = 0; i < n ; i++) {
        let firstSymbol = String.fromCharCode(97 + i);

        for (let j = 0; j < n ; j++) {
            let secondSymbol = String.fromCharCode(97 + j);

            for (let k = 0; k < n ; k++) {

                let thirdSymbol = String.fromCharCode(97 + k);
                console.log(`${firstSymbol}${secondSymbol}${thirdSymbol}`);
            }
        }
    }
}
solve(6);