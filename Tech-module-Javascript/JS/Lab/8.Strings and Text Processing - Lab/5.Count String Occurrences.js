function solve(text, word) {
    text = text.split(' ');
    let counterOcc = 0;

    for (let w of text) {
        if (w === word) {
            counterOcc++;
        }
    }
    console.log(counterOcc);
}

solve(
    "This is a word and it also is a sentence",
    "is"
);