function solve(arr) {

    let townsObj = {};

    for (let row of arr) {

        if (!townsObj.hasOwnProperty(row.town)) {
            townsObj[row.town] = {
                totalProfit: row.price,
                cars: [],
                counter: 1
            };
            townsObj[row.town].cars.push({
                model: row.model,
                number: row.regNumber,
                vigPrice: row.price
            })
        } else {
            townsObj[row.town].totalProfit += row.price;
            townsObj[row.town].counter++;
            townsObj[row.town].cars.push({
                model: row.model,
                number: row.regNumber,
                vigPrice: row.price
            });
        }
    }

    let sortedTowns = Object.entries(townsObj).sort((a, b) => {
        let result = b[1].totalProfit - a[1].totalProfit || b[1].counter - a[1].counter;

        if (result === 0) {
            return a[0].localeCompare(b[0]);
        }
        return result
    });

    let mostProfitableTown = sortedTowns[0];
    console.log(`${mostProfitableTown[0]} is most profitable - ${mostProfitableTown[1].totalProfit} BGN`);

    let popularCars = mostProfitableTown[1].cars;
    let modelCount = {};

    for (let i = 0; i < popularCars.length; i++) {
        if (!modelCount.hasOwnProperty(popularCars.model)) {
            modelCount[popularCars[i].model] = {
                carCounter: 1,
                vigPrice: popularCars[i].vigPrice
            }
        } else {
            modelCount[popularCars[i].model].counter++;
        }
    }

    let sortedCars = Object.entries(modelCount).sort((a, b) => {
        let result = b[1].carCounter - a[1].carCounter || b[1].vigPrice - a[1].vigPrice;

        if (result === 0) {
            return a[0].localeCompare(b[0]);
        }

        return result;
    });

    let mostDrivenCar = sortedCars[0];

    console.log(`Most driven model: ${mostDrivenCar[0]}`);

    sortedTowns.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (let town of sortedTowns) {
        let cars = town[1].cars;
        let result = [];
        if (cars.find((c) => c.model === mostDrivenCar[0])) {
            for (let c of cars) {
                if (c.model === mostDrivenCar[0]) {
                    result.push(c.number);
                }
            }
            result.sort((a, b) => a.localeCompare(b));
            console.log(`${town[0]}: ${result.join(', ')}`);
        }
    }
}

solve([
    {model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    {model: 'jigula', regNumber: '53252', town: 'Burgas', price: 2},

    {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3}]
);