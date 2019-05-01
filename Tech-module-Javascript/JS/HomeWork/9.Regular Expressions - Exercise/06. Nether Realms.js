function solve(input) {

    let heroes = [];
    input = input[0].trim()
        .split(/,\s*/g)
        .sort((a, b) => {
            return a.localeCompare(b);
        });

    for (let row of input) {
        if (row !== '') {
            let currentHero = {};
            currentHero.name = row;
            currentHero.health = 0;
            currentHero.damage = 0;

            let healthRegex = /[^\d.+\-\*\/]/g;
            let damageRegex = /[-+]*\d+(\.\d+)*/g;

            if (row.match(damageRegex)) {
                currentHero.damage = row.match(damageRegex)
                    .map(Number)
                    .reduce((a, b) => a + b, 0);
                let quantifier = row.match(/\*/g);
                let delimeter = row.match(/\//g);

                if (quantifier) {
                    currentHero.damage *= (2 * quantifier.length);
                }
                if (delimeter) {
                    currentHero.damage /= (2 * delimeter.length);
                }
            }
            for (let ch of row) {
                if (ch.match(healthRegex)) {
                    currentHero.health += ch.charCodeAt(0);
                }
            }
            heroes.push(currentHero);
        }
    }
    for (let hero of heroes) {
        console.log(`${hero.name} - ${hero.health} health, ${hero.damage.toFixed(2)} damage`);
    }
}

solve([
    ',M3ph1st0**, Azazel'
]);