function solve(inputArr) {

    let [goods, orderedGoods] = inputArr;
    let products = {};
    let storeOrders = {};

    for (let i = 0; i < goods.length; i += 2) {

        let product = goods[i];
        let quantity = +goods[i + 1];
        if (products.hasOwnProperty(product)) {
            products[product] += quantity;
        }
        else {
            products[product] = quantity;
        }
    }

    for (let j = 0; j < orderedGoods.length ; j += 2) {

        let product = orderedGoods[j];
        let quantity = +orderedGoods[j + 1];
        if (storeOrders.hasOwnProperty(product)) {
            storeOrders[product] += quantity;
        } else {
            storeOrders[product] = quantity;
        }
    }

    for (let product in storeOrders) {

        if (products.hasOwnProperty(product)) {
            products[product] += storeOrders[product];
        } else {
            products[product] = storeOrders[product];
        }
    }

    console.log(products);
}

solve([
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
]);