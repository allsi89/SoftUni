function solve(input) {
    let sequence =
        input.shift()
            .split(' ')
            .map(Number);

    let commands = input;

    for (let command of commands) {
        let tokens = command.split(' ');
        let action = tokens[0];
        let num = +tokens[1];
        let index = sequence.indexOf(num);

        if (action === 'Mort') {
            console.log(sequence.join(' '));
            break;
        }
        else if (action === 'Add') {
            addNumber(num);
        }
        else if (action === 'Remove') {
            removeNumber(num);
        }
        else if (action === 'Replace') {
            let number = +tokens[2];
            replaceElement(number, index);
        }
        else if (action === 'Increase') {
            increase(num);
        }
        else if (action === 'Collapse') {
            collapse(num);
        }
    }

    function addNumber(num) {
        sequence.push(num);
    }

    function removeNumber(num) {
        let index = sequence.indexOf(num);
        if (sequence.includes(num)) {
            sequence.splice(index, 1);
        } else if (sequence.length >= num) {
            sequence.splice(num, 1);
        }
    }

    function replaceElement(num, index) {

        if (index !== -1) {
            sequence.splice(index, 1, num);
        }
    }

    function increase(num, index) {

        if (sequence.includes(num)) {
            sequence = sequence.map(x => x + num);
        }
        else {
            let last = sequence[sequence.length - 1];
            sequence = sequence.map(x => x + last);
        }
    }

    function collapse(num) {
        for (let i = 0; i < sequence.length; i++) {

            if (sequence[i] < num) {
                sequence.splice(i, 1);
                i--;
            }
        }
    }
}

solve(['1 4 5 19 13 42 69 24',
    'Add 1',
    'Remove 3',
    'Remove 4',
    'Remove 1',


    'Mort']);
