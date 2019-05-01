function solve(input) {

    let events = input[0].split('|');
    let initialEnergy = 100;
    let initialCoins = 100;
    let isComplete = true;

    for (let i = 0; i < events.length; i++) {
        let event = events[i].split('-');
        let action = event[0];
        let number = +event[1];
        let recharged = 0;

        if (action === 'rest') {
            recharged = energyGain(number, initialEnergy);
            console.log(`You gained ${recharged} energy.`);
            initialEnergy = rest(number, initialEnergy);
            console.log(`Current energy: ${initialEnergy}.`);
        }
        else if (action === 'order') {
            let coins = 0;

            if (initialEnergy >= 30) {
                initialEnergy -= 30;
                coins = number;
                console.log(`You earned ${coins} coins.`);
                initialCoins += coins;

            } else {
                initialEnergy += 50;
                console.log('You had to rest!');
            }
        }
        else {
            let ingredient = action;
            let coinsToSpend = number;

            if (coinsToSpend >= initialCoins) {
                console.log(`Closed! Cannot afford ${ingredient}.`);
                return;
            } else {
                initialCoins -= coinsToSpend;
                console.log(`You bought ${ingredient}.`);
            }
        }
    }

    function rest(energy, initialEnergy) {
        let diff = 100 - initialEnergy;

        if (initialEnergy < 100 && diff >= energy) {

            initialEnergy += energy;
            return initialEnergy;

        } else if (initialEnergy < 100 && diff < energy) {

            initialEnergy += energy - diff;
            return initialEnergy;

        } else {
            initialEnergy += 0;
            return initialEnergy;
        }
    }

    function energyGain(number, initialEnergy) {
        let diff = 100 - initialEnergy;
        let energyGained = 0;

        if (initialEnergy < 100 && diff >= number) {
            energyGained = number;
            initialEnergy += number;
            return energyGained;

        } else if (initialEnergy < 100 && diff < number) {
            energyGained = number - diff;
            initialEnergy += (number - diff);
            return energyGained;

        } else {
            initialEnergy += 0;
            energyGained = 0;
            return energyGained;
        }
    }

    if (isComplete) {
        console.log('Day completed!');
        console.log(`Coins: ${initialCoins}`);
        console.log(`Energy: ${initialEnergy}`);
    }
}

solve(['order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000']);