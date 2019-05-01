function solve(input) {
    let valid = /(%[A-Z][a-z]+%)([^.%$|]*)(<[A-Z][a-z]+>)([^.%$|]*)(\|\d+\|)([^.%$|]*)(\d+\.*\d+\$)/g;
    let total = 0;
    input.pop();

    for (let row of input) {
        if (row.match(valid)) {
            let customer = row.match(/%([A-Z][a-z]+)%/g);
            customer = customer[0].split('%').join('');
            let product = row.match(/<[A-Z][a-z]+>/g);
            product = product[0].replace('<', '').replace('>', '');
            let count = row.match(/\|\d+\|/g);
            count = +count[0].split('|').join('');
            let price = row.match(/\d+\.*\d+\$/g);
            price = +price[0].split('$').join('');

            console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
            total += count * price;
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