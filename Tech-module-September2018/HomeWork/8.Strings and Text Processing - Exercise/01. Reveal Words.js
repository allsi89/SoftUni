function solve(words, text) {
    words = words.split(', ');
    let censored = '';

    for (let w of words) {
        censored = '*'.repeat(w.length);
        text = text.replace(censored, w);
    }
    console.log(text);
}

solve(
    'great',
    'softuni is ***** place for learning new programming languages'
);