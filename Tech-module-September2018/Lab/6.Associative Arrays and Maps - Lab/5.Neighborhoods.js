//jshint esversion:6
function solve(input) {
    let neighboorHoods = input
        .shift()
        .split(', ');
    let map = new Map();

    for (let neighboorhood of neighboorHoods) {
        map.set(neighboorhood, []);
    }

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' - ');
        let neighboorhood = tokens[0];
        let person = tokens[1];

        if (neighboorHoods.includes(neighboorhood)) {
            map.get(neighboorhood).push(person);
        }
    }

    let sortedMap = [...map].sort((a, b) => b[1].length - a[1].length);

    sortedMap.forEach((kvp) => {
        let [neighboorhood, persons] = kvp;
        console.log(`${neighboorhood}: ${persons.length}`);

        for (let person of persons) {
            console.log(`--${person}`);
        }
    });
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']);