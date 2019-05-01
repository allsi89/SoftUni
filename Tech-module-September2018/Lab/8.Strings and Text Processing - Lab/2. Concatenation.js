function solve(words) {
    let concatenatedString = '';

    for (let w of words) {
        concatenatedString = concatenatedString.concat(w);
    }
    console.log(concatenatedString);
}

solve([
    "First",
    "Second",
    "Third"]);