function solve(text) {
    let pascalWords = [];
    let currentWord = text[0];

    for (let i = 1; i < text.length; i++) {
        if (text[i].toUpperCase() !== text[i]) {
            currentWord = currentWord.concat(text[i]);
        }
        else {
            pascalWords.push(currentWord);
            currentWord = text[i];
        }
    }
    pascalWords.push(currentWord);
    console.log(pascalWords.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');