function solve(input) {
    let words = input.shift()
        .split(' | ');

    let command = input.pop();
    let dictionary = {};

    for (let w of words) {
        let [word, description] = w.split(': ');

        if (!dictionary.hasOwnProperty(word)) {
            dictionary[word] = [];
        }
        let definitions = dictionary[word];

        if (!definitions.hasOwnProperty(description)) {
            definitions.push(description);
        }
    }
    let sortedWords = Object.entries(dictionary)
        .sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });

    if (command === 'End') {
        for (let [word, description] of sortedWords) {
            console.log(word);
            let sortedDeff = description.sort((a, b) => {
                return b.length - a.length;
            });

            for (let deff of sortedDeff) {
                console.log(` -${deff}`);
            }
        }
    }
    else if (command === 'List') {
        let output = [];
        for (let [word, deff] of sortedWords) {
            output.push(word);
        }
        console.log(output.join(' '));
    }
}

solve([
    'programmer: an animal, which turns coffee into code | developer: a magician',
    'Pesho | Gosho',
    'List'
]);