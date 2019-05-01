function solve(arr) {
    let warehouse = {};

    for (let element of arr) {
        let [command, brand, type, expiration, quantity] = element.split(', ');
        quantity = +quantity;

        if (command === 'IN') {
            if (!warehouse.hasOwnProperty(brand)) {
                warehouse[brand] = {};
            }

            if (!warehouse[brand].hasOwnProperty(type)) {
                warehouse[brand][type] = {
                    expiration: expiration,
                    quantity: 0
                };
            }

            let currentExpiration = warehouse[brand][type].expiration;

            if (currentExpiration === expiration) {
                warehouse[brand][type].quantity += quantity;
            } else if (currentExpiration < expiration) {
                warehouse[brand][type].quantity = quantity;
                warehouse[brand][type].expiration = expiration;
            }
        } else if (command === 'OUT') {
            if (warehouse.hasOwnProperty(brand)) {
                if (warehouse[brand].hasOwnProperty(type)) {
                    let currentExpiration = warehouse[brand][type].expiration;
                    let currentQuantity = warehouse[brand][type].quantity;


                    if (currentExpiration > expiration && currentQuantity >= quantity) {
                        warehouse[brand][type].quantity -= quantity;
                        if (warehouse[brand][type].quantity === 0) {
                            delete warehouse[brand][type];
                        }
                    }
                }
            }
        } else if (command === 'REPORT') {
            console.log('>>>>> REPORT! <<<<<');

            let warehouseArr = Object.entries(warehouse);

            for (let brand of warehouseArr) {
                let nameOfBrand = brand[0];
                console.log(`Brand: ${nameOfBrand}:`);
                let coffees = Object.entries(brand[1]);

                for (let coffee of coffees) {
                    let coffeName = coffee[0];
                    let expireDate = coffee[1].expiration;
                    let quantity = coffee[1].quantity;
                    console.log(`-> ${coffeName} -> ${expireDate} -> ${quantity}.`);
                }
            }
        } else if (command === 'INSPECTION') {
            console.log('>>>>> INSPECTION! <<<<<');

            let warehouseArr = Object.entries(warehouse).sort((a, b) => {
                return a[0].localeCompare(b[0]);
            });

            for (let brand of warehouseArr) {
                let nameOfBrand = brand[0];
                console.log(`Brand: ${nameOfBrand}:`);
                let coffees = Object.entries(brand[1]).sort((a, b) => b[1].quantity - a[1].quantity);

                for (let coffee of coffees) {
                    let coffeName = coffee[0];
                    let expireDate = coffee[1].expiration;
                    let quantity = coffee[1].quantity;
                    console.log(`-> ${coffeName} -> ${expireDate} -> ${quantity}.`);
                }
            }
        }
    }
}

solve([
    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",
    "IN, Folgers, Black Silk, 2023-03-01, 14",
    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",
    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",
    "IN, Folgers, Black Silk, 2022-01-01, 10",
    "IN, Lavazza, Intenso, 2022-07-19, 20",
    "OUT, Dallmayr, Espresso, 2022-07-19, 5",
    "OUT, Dallmayr, Crema, 2022-07-19, 5",
    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",
    "REPORT",
    "INSPECTION",
]);