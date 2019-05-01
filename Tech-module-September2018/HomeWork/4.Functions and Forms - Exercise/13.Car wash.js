function solve(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        switch (command) {
            case 'soap':
                value = soapping(value);
                break;
            case 'vacuum cleaner':
                value = vacuumCleaner(value);
                break;
            case 'water':
                value = water(value);
                break;
            case 'mud':
                value = mud(value);
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);

    function soapping(value) {
        return value += 10;
    }

    function vacuumCleaner(value) {
        return value *= 1.25;
    }

    function water(value) {
        return value *= 1.20;
    }

    function mud(value) {
        return value * 0.9;
    }

}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])