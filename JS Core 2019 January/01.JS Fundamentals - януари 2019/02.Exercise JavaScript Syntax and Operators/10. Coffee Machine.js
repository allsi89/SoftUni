function solve(arr) {
    let totalIncome = 0;

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(', ');
        let coinsInserted = +tokens[0];
        let typeOfDrink = tokens[1];
        let price = 0;
        

        if (typeOfDrink === 'coffee') {
            if(tokens[2] === 'caffeine'){
                price = 0.8;
            } else if(tokens[2] === 'decaf') {
                price = 0.9;
            }

        } else if(typeOfDrink === 'tea') {
            price = 0.8;
        }

        if(tokens.includes('milk')) {
            let sugarPrice = +(price * 0.10).toFixed(1);
            price += sugarPrice;
        }

        let sugar = tokens[tokens.length - 1];
        
        if(sugar > 0 && sugar <= 5) {
            price += 0.10;
        }

        if(coinsInserted >= price) {
            let change = (coinsInserted - price).toFixed(2);
            console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${change}$`);
            totalIncome += price;
        } else {
            let diff = price - coinsInserted;
            console.log(`Not enough money for ${typeOfDrink}. Need ${diff.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

solve([
    '1.00, coffee, caffeine, milk, 4', 
    '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0'
]);