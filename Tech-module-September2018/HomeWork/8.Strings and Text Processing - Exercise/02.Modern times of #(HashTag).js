function solve(text) {
    text = text.split(' ');

    for (let w of text) {
        if (w.startsWith('#') && w.length > 1) {
            let specialWord = w.substring(1);
            let flag = true;

            for (let ch of specialWord) {
                if (!isLetter(ch)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log(specialWord);
            }
        }
    }

    function isLetter(char) {
        let ascii = char.toLowerCase().charCodeAt(0);
        return ascii >= 97 && ascii <= 122;
    }
}

solve('Nowadays everyone uses #ksfads2 # to tag a #special word in #socialMedia');