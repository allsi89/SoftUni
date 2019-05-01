function solve(input) {
    let encryptedString = input
        .shift()
        .split('');

    let regex = /([d-z{}|#])/g;

    for (let ch of encryptedString) {

        if (!ch.match(regex)) {
            console.log('This is not the book you are looking for.');
            return;
        }
    }
    encryptedString = encryptedString
        .map(ch => ch.charCodeAt(0) - 3)
        .map(ch => String.fromCharCode(ch))
        .join('');


    let [substr1, substr2] = input[0].split(' ');

    while (encryptedString.includes(substr1)) {
        encryptedString = encryptedString.replace(substr1, substr2);
    }
    console.log(encryptedString);
}

solve([
    'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an'
]);