//jshint esversion:6
function solve(arr) {
    let [townName, lat, long] = arr.shift()
        .split('|')
        .map(e => e.trim())
        .filter(t => t !== '');

    let towns = [];

    for (let arrElement of arr) {
        let currentRow = arrElement
            .split('|')
            .map(r => r.trim())
            .filter(r => r !== '');

        let currentTown = {
            [townName]: currentRow[0],
            [lat]: +currentRow[1],
            [long]: +currentRow[2]
        };

        towns.push(currentTown);
    }

    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);