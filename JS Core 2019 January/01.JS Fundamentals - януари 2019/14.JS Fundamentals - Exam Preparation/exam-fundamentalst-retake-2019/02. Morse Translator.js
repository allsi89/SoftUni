function solve(morseCode) {
    let wordArr = morseCode.split(' ');
    let morseAlphabet = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z'
    };

    let char = morseAlphabet[wordArr[0]];


    let result = [];
    for (let char of wordArr) {
        result.push(morseAlphabet[char])
    }
    console.log(result.join(''));
}

solve('... - .- -.-. -.- --- ...- . .-. ..-. .-.. --- .--')