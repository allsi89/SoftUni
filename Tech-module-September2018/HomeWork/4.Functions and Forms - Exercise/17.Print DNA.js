function dnaHelix(number) {
    number = Number(number);
    let str = 'ATCGTTAGGG';
    let index = 0;

    for (let i = 0; i < number; i++) {
        if (i % 4 == 0) {
            console.log(`**${str[index % 10]}${str[index % 10 + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${str[index % 10]}--${str[index % 10 + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${str[index % 10]}----${str[index % 10 + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${str[index % 10]}--${str[index % 10 + 1]}*`);
        }

        index += 2
    }
}

dnaHelix(5);