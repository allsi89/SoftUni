function solve(input) {

    let list = [];

    for (let currentComand of input) {
        let tokens = currentComand.split(' ');

        if (tokens.length === 3) {
            addToList(tokens[0]);
        } else {
            removeFromList(tokens[0]);
        }
    }
    // printing the list of guests in new lines
    console.log(list.join('\n'));

    function addToList(guest) {

        if (!list.includes(guest)) {
            list.push(guest);
        } else {
            console.log(`${guest} is already in the list!`);
        }
    }

    function removeFromList(guest) {

        if (list.includes(guest)) {
            let index = list.indexOf(guest);
            list.splice(index, 1);
        } else {
            console.log(`${guest} is not in the list!`)
        }
    }
}

solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);