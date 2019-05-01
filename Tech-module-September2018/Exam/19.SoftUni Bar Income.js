function solve(input) {
    input.pop();

    let validRegex = /%[A-Z][a-z]+%([^%$|.]+)*\<\w+\>([^%$|.]+)*\|\d+\|([^%$|.]+)*\d+(.\d+)*\$/g;
    let nameReg = /(?<=%)[A-Z][a-z]+(?=%)/g;
    let productReg = /(?<=<)\w+(?=>)/g;
    let countReg = /(?<=\|)\d+(?=\|)/g;
    let priceReg = /\d+(.\d+)*(?=\$)/g;
    let total = 0;

    for (let row of input) {
        if (row.match(validRegex)) {
            let name = row.match(nameReg)[0];
            let product = row.match(productReg)[0];
            let count = Number(row.match(countReg));
            let newRow = row.split('|');
            let price = +newRow[2].match(priceReg);
            total += count * price;

            console.log(`${name}: ${product} - ${(price * count).toFixed(2)}`);
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);