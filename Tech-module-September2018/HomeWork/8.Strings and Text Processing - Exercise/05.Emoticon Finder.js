function solve(text) {
    text = text.split(' ');

    for (let w of text) {
        if (w.startsWith(':') && w.length === 2) {
            let flag = isNaN(w[1]);
            if (flag) {
                console.log(w);
            }
        }
    }
}

solve('There are so many emoticons nowadays :P I :2 have many ideas :O what input to place here :)');