function solve(input) {

    let train = input
        .shift()
        .split(' ')
        .map(Number);


    let max = Number(input.shift());

    for (let currentCommand of input) {
        let tokens = currentCommand.split(' ');

        if (tokens.length > 1) {
            train.push(+tokens[1]);
        } else {

            let passangers = +tokens[0];
            for (let i = 0; i < train.length; i++) {
                let wagon = train[i];

                if (wagon + passangers <= max) {
                    train[i] += passangers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);