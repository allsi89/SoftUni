function solve(word, text) {
    let searchedWord = word.toLowerCase();
    text = text.toLowerCase().split(' ');
    console.log(text);

    if (text.includes(searchedWord)) {
        console.log(word);
    }
    else {
        console.log(`${word} not found!`);
    }
}

solve(
    'java',
    'JavaScript is the best programming language');