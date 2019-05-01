function solve(input) {
    let peshoEquipment = input.shift();
    peshoEquipment = peshoEquipment.split(' ');

    let commands = input;

    for (let command of commands) {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];

        if (currentCommand === 'Buy') {
            buyEquipment(tokens[1]);
        }
        else if (currentCommand === 'Trash') {
            removeEquipment(tokens[1]);
        }
        else if (currentCommand === 'Repair') {
            repair(tokens[1]);
        }
        else if (currentCommand === 'Upgrade') {

            let [item, upgrade] = tokens[1].split('-');
            upgradeItem(item, upgrade);
        }
    }

    console.log(peshoEquipment.join(' '));

    function buyEquipment(equipment) {
        if (!peshoEquipment.includes(equipment)) {
            peshoEquipment.push(equipment);
        }
    }

    function removeEquipment(equipment) {
        if (peshoEquipment.includes(equipment)) {
            let index = peshoEquipment.indexOf(equipment);
            peshoEquipment.splice(index, 1);
        }
    }

    function repair(equipment) {
        if (peshoEquipment.includes(equipment)) {
            let index = peshoEquipment.indexOf(equipment);
            peshoEquipment.splice(index, 1);
            peshoEquipment.push(equipment);
        }
    }

    function upgradeItem(item, upgrade) {
        let index = peshoEquipment.indexOf(item);

        if (index !== -1) {
            let upgradedItem = `${item}:${upgrade}`;
            peshoEquipment.splice(index + 1, 0, upgradedItem);
        }
    }
}

solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);