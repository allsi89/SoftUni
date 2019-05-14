function solve(arr) {

    let carsObj = {
        instructions: [],
        parts: {}
    };

    let resultArr = [];

    for (let row of arr) {
        let model = row.split(' ')[1];


        if (row.startsWith('repair')) {
            let carState = JSON.parse(row.split(' ')[2]);

            if (!carsObj.instructions.includes(model)) {
                console.log(`${model} is not supported`);
            } else {
                // console.log(typeof carState);
                for (let element in carState) {
                    if (carState[element] === 'broken') {

                        if (carsObj.parts[model].includes(element)) {

                       }}
                }
            }
        }

        if (row.startsWith('instructions') && !carsObj.instructions.includes(model)) {
            carsObj.instructions.push(model);
        }

        if (row.startsWith('addPart')) {
            let [car,part,serial] = row.split(' ').slice(1);
            let partToAdd = [];
            partToAdd.push(part);
            partToAdd.push(serial);

            if (!carsObj.parts.hasOwnProperty(car)) {
                carsObj.parts[car] = [];
                carsObj.parts[car].push(partToAdd);
            } else {
                carsObj.parts[car].push(partToAdd);
            }
        }
    }
    console.log(carsObj.parts);
}

solve(
    [
        'instructions bmw',
        'addPart opel engine GV1399SSS',
        'addPart opel transmission SMF556SRG',
        'addPart bmw engine GV1399SSS',
        'addPart bmw transmission SMF444ORG',
        'addPart opel transmission SMF444ORG',
        'instructions opel',
        'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
        'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
    ]
);
