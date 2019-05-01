function solve(input) {
    input = input.split(' ');
    let legendary = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junk = {};

    for (let i = 0; i < input.length; i += 2) {
        let item = input[i + 1].toLowerCase();
        let quantity = +input[i];

        if (item === 'shards' || item === 'fragments' || item === 'motes') {
            let legendaryItem = item;

            legendary[legendaryItem] += quantity;

            if (legendary[legendaryItem] >= 250) {
                let obtainedItem = legendaryItem;
                legendary[legendaryItem] -= 250;
                let result = itemObtained(obtainedItem);
                console.log(`${result} obtained!`);
                break;
            }
        } else {

            if (junk.hasOwnProperty(item)) {
                junk[item] += quantity;
            } else {
                junk[item] = quantity;
            }
        }
    }

    let sortedLegendary = Object.entries(legendary)
        .sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });

    for (let [item, quantity] of sortedLegendary) {
        console.log(`${item}: ${quantity}`);
    }

    let sortedJunk = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [item, quantity] of sortedJunk) {
        console.log(`${item}: ${quantity}`);
    }

    function itemObtained(item) {
        let output = '';
        if (item === 'shards') {
            output = 'Shadowmourne';
        }
        else if (item === 'fragments') {
            output = 'Valanyr';
        } else {
            output = 'Dragonwrath';
        }
        return output;
    }
}

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');