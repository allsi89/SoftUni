function solve(input) {
    let [firstPart, secondPart, thirdPart] = input[0].split('|');
    let capitalLetters = firstPart.match(/(?<=([$%&#]))[A-Z]+(?=\1)/)[0];
    let wordParams = secondPart.match(/\d+:\d{2}/g);
    let validParams = [];
    let words = thirdPart.split(' ');

    let validWords = [];

    for (let el of wordParams) {
        let [letter, length] = el.split(':').map(Number);
        letter = String.fromCharCode(letter);
        length = length + 1;

        for (let l of capitalLetters) {
            if (l === letter) {
                validParams.push([letter,length]);
            }
        }
    }

    for (let w of words) {

        for (let [firstLetter, length] of validParams) {
            if (w[0] === firstLetter && w.length === length) {
                if (!validWords.includes(w)) {
                    validWords.push(w);
                }
            }
        }
    }

    for (let word of validWords) {
        console.log(word);
    }
}
solve([ 'Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig' ]);