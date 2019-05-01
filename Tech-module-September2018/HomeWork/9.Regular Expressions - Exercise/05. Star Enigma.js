function solve(input) {

    let countOfMessages = Number(input.shift());
    const regex = /[star]/gi;
    let starCount = 0;
    const planetRegex = /(?<=@)[A-Za-z]+/g;

    let planetsAttacked = [];
    let planetsDestroyed = [];
    let countOfAttackedPlanets = 0;
    let counntOfDestroyedPlanets = 0;

    for (let row of input) {
        starCount = 0;
        let message = row.split('');
        let currentPlanet = {};

        for (let ch of message) {
            if (ch.match(regex)) {
                starCount++;
            }
        }
        message = message
            .map(ch => ch.charCodeAt(0) - starCount)
            .map(ch => String.fromCharCode(ch))
            .join('');
        currentPlanet.name = message.match(planetRegex);
        currentPlanet.population = +message.match(/(?<=:)\d+/g);   //   (?<=@)
        currentPlanet.attackType = message.match(/(?<=!)[AD]/g);
        currentPlanet.soldiersCount = +message.match(/(?<=->)\d+/g);

        let flagRegex = /@([a-zA-Z]+)[^@\-!:>]*:[0-9]+[^@\-!:>]*!([AD])![^@\-!:>]*->[0-9]+/g;

        if (message.match(flagRegex)) {
            if (currentPlanet.attackType[0] === 'A') {
                planetsAttacked.push(currentPlanet.name[0]);
                countOfAttackedPlanets++;
            } else {
                planetsDestroyed.push(currentPlanet.name[0]);
                counntOfDestroyedPlanets++;
            }
        }
    }
    let sortedPLanetsD = [...planetsDestroyed]
        .sort((a, b) => {
            return a.localeCompare(b);
        });
    let sortedPlanetsA = [...planetsAttacked]
        .sort((a, b) => {
            return a.localeCompare(b);
        });

    console.log(`Attacked planets: ${countOfAttackedPlanets}`);
    for (let planet of sortedPlanetsA) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${counntOfDestroyedPlanets}`);
    for (let planet of sortedPLanetsD) {
        console.log(`-> ${planet}`);
    }
}

solve([
    '3',
    'tt(\'\'DGsvywgerx>6444444444%H%1B9444',
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);