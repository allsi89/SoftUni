function solve(arr) {

    let bitcoins = 0;   
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let money = 0;
    let dayCounter = 0;
    let firstBitcoin = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        dayCounter++;
        let currentShift = arr[i];

        if (dayCounter % 3 === 0) {
            currentShift *= 0.70;
        }

        let currentMoney = currentShift * goldPrice;
        
        money += currentMoney;

        if (money >= bitcoinPrice) {
                        
            while (money >= bitcoinPrice) {

                bitcoins++;
                money -= bitcoinPrice;

                if (bitcoins === 1) {
                    firstBitcoin = dayCounter;
                    
                }                      
            }
        }                      
    }

    if (bitcoins < 1) {
        console.log(`Bought bitcoins: ${bitcoins}`);
        
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${bitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);

    }
}
//solve([100, 200, 300 ]);
solve([50, 100 ]);
//solve([3124.15, 504.212, 2511.124]);

