function solve(input) {
    input.pop();
    let travels = {};

    for (let row of input) {
        let [town, arguments] = row.split(':');
        let [time, passengersCount] = arguments
            .split('->');
        passengersCount = +passengersCount;

        if (time !== 'ambush') {
            if (!travels.hasOwnProperty(town)) {
                travels[town] = {
                    record: Number(time),
                    totalPassengers: 0
                }
            } else if (travels.hasOwnProperty(town)) {
                if (travels[town].record === 0) {
                    travels[town].record = time;
                }
            }

            if (time < travels[town].record) {
                travels[town].record = time;
                travels[town].totalPassengers += passengersCount;
            } else if (time >= travels[town].record) {
                travels[town].totalPassengers += passengersCount;
            }
        } else if (time === 'ambush') {
            if (travels.hasOwnProperty(town)) {
                travels[town].record = 0;
                travels[town].totalPassengers -= passengersCount;
            }
        }
    }
    let sorted = Object.entries(travels)
        .sort((a, b) => {
            let result = a[1].record - b[1].record;

            if (result === 0) {
                return a[0].localeCompare(b[0]);
            }
            return result;
        });

    for (let el of sorted) {
        if (el[1].record > 0 && el[1].totalPassengers > 0){
            console.log(`${el[0]} -> Time: ${el[1].record} -> Passengers: ${el[1].totalPassengers}`);
        }
    }
}

solve([ 'Sto-Lat:8->120',
    'Ankh-Morpork:3->143',
    'Sto-Lat:9->80',
    'Ankh-Morpork:4->143',
    'Sto-Lat:3->20',
    'Quirm:12->40',
    'Quirm:13->29',
    'sofia:5->0',
    'Slide rule' ]);