function solve(cars) {
    let carNumbers = [];

    for (let car of cars) {
        let [direction, carNumber] = car.split(', ');

        if (direction === 'IN') {

            if (!carNumbers.includes(carNumber)) {
            carNumbers.push(carNumber);
            }
        }
        else if (direction === 'OUT') {
            let carIndex = carNumbers.indexOf(carNumber);

            if (carNumbers.includes(carNumber)) {
                carNumbers.splice(carIndex, 1);
            }
        }
    }
    if (carNumbers.length === 0){
        console.log('Parking Lot is Empty');
    }
    else {
    let sorted = carNumbers.sort((a, b) => a.localeCompare(b));
    console.log(sorted.join('\n'));
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);