function solve(input) {
    let guests = new Map();
    guests.set('VIP', []);
    guests.set('Regular', []);

    let index = input.indexOf('PARTY');
    let guestInput = input.slice(0, index);

    for (let guestStatus of guestInput) {
        let guestType = '';

        if (isNaN(Number(guestStatus[0]))) {
            guestType = 'Regular';
        }
        else {
            guestType = 'VIP';
        }

        let guestsForGivenType = guests.get(guestType);
        guestsForGivenType.push(guestStatus);
    }

    for (let i = index + 1; i < input.length; i++) {
        let guest = input[i];
        let guestType = '';

        if (isNaN(Number(guest[0]))) {
            guestType = 'Regular';
        }
        else {
            guestType = 'VIP';
        }

        let guestsForGivenType = guests.get(guestType);
        let index = guestsForGivenType.indexOf(guest);
        guestsForGivenType.splice(index, 1);
    }

    let sortedMap = [...guests]
        .sort((a, b) => {
            return b[0].localeCompare(a[0]);
        });
    let regularCount = guests.get('Regular').length;
    let vipCount = guests.get('VIP').length;
    console.log(regularCount + vipCount);
    for (let [guestType, guestsForGivenType] of sortedMap) {
        if (guestsForGivenType.length > 0) {
            console.log(guestsForGivenType.join('\n'));
        }
    }
}

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);