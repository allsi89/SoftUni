function solve(rooms) {
    rooms = rooms.toString();
    rooms = rooms.split('|');


    let initialHealth = 100;
    let currentHealth = initialHealth;
    let initialCoins = 0;
    let currentCoins = initialCoins;
    let counter = 0;
    let isDone = true;

    for (let i = 0; i < rooms.length; i++) {
        let tokens = rooms[i].split(' ');
        let monster = tokens[0];
        counter++;

        if (monster === 'potion') {
            let diff = 100 - currentHealth;

            if (currentHealth < 100 && diff >= +tokens[1]) {
                currentHealth += +tokens[1];
                console.log(`You healed for ${+tokens[1]} hp.\nCurrent health: ${currentHealth} hp.`);
            }
            else if (currentHealth < 100 && diff < +tokens[1]) {
                currentHealth += diff;
                console.log(`You healed for ${diff} hp.\nCurrent health: ${currentHealth} hp.`);
            }
        }
        else if (monster === 'chest') {
            currentCoins += +tokens[1];
            console.log(`You found ${+tokens[1]} coins.`);     //   done
        }
        else {
            currentHealth -= +tokens[1];

            if (currentHealth > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${counter}`);
                return;
            }
        }
    }

    if (isDone) {
        console.log('You\'ve made it!');
        console.log(`Coins: ${currentCoins}`);
        console.log(`Health: ${currentHealth}`);
    }
}

solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);