function solve(input) {
    let map = new Map();

    for (let string of input) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = +tokens[1];

        if (map.has(product)) {
            let existingQuantity = map.get(product);
            existingQuantity += quantity;
            map.set(product, existingQuantity);
        }
        else {
            map.set(product, quantity);
        }
    }
    for (let [product, quantity] of map.entries()) {
        console.log(`${product} -> ${quantity}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);