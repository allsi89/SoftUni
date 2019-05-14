function solve(object) {

    let engines = {
        '90': 1800,
        '120': 2400,
        '200': 3500
    };

    let goal = object.power;
    let closest = [90, 120, 200].reduce(function (prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });

    let wheel = object.wheelsize;
    if (object.wheelsize % 2 === 0) {
        wheel -= 1;
    }

    let outputCar = {
        model: object.model,
        engine: {power: closest, volume: engines[closest]},
        carriage: {
            type: object.carriage,
            color: object.color
        },
        wheels: [wheel, wheel, wheel, wheel]
    };

    return outputCar;
}

console.log(solve({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));