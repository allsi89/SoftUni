function solve(fruit, quantity, pricePerKg) {
    let total = ((quantity / 1000) * pricePerKg).toFixed(2);
    console.log(`I need ${total} leva to buy ${(quantity / 1000).toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);