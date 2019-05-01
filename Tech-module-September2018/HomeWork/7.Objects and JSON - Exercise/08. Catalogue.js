function solve(input) {
    let catalogue = {};

    for (let inputRow of input) {
        let [name, price] = inputRow.split(' : ');
        price = Number(price);
        let initial = name[0];

        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {};
        }
        let products = catalogue[initial];
        products[name] = price;
    }
    let sortedCatalogue = Object.entries(catalogue)
        .sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });

    for (let [initial, product] of sortedCatalogue) {
        let sortedProducts = Object.entries(product)
            .sort((a, b) => {
                return a[0].localeCompare(b[0]);
            });
        console.log(initial);
        for (let [name, price] of sortedProducts) {
            console.log(`  ${name}: ${price}`);
        }
    }
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti - Bug Spray : 15',
    'T - Shirt : 10'
]);