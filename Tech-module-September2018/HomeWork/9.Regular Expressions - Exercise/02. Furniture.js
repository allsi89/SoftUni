function solve(input) {

    let priceOfFurniture;
    let quantity;
    let valid = /\>{2}\w+\<{2}\d+\.*\d*!\d/g;
    let furnitureArr = [];
    let total = 0;

    for (let item of input) {
        if (item.match(valid)) {
            furnitureArr.push(item.match(/[A-Za-z]+/g));
            priceOfFurniture = item.match(/\d+\.*\d+!/g);
            priceOfFurniture = +priceOfFurniture[0].replace('!', '');
            quantity = item.match(/!\d+/g);
            quantity = +quantity[0].replace('!', '');
            total += priceOfFurniture * quantity;
        }
    }
    console.log('Bought furniture:');
    for (let item of furnitureArr) {
        console.log(item[0]);
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

solve([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);