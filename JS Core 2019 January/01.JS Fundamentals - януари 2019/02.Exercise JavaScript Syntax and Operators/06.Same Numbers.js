function solve(number) {
    number = number.toString();
    let sum = 0;
    let flag = true;

    for (let i = 0; i < number.length; i++) {
        let current = +number[i];
        if (i === 0) {
            sum += +number[i];
        } else {
            if (current === +number[i - 1]) {
                sum += current;

            } else {
                sum += current;
                flag = false;
            }
        }
    }

    if (flag) {
        console.log('true');
        console.log(sum);
    } else {
        console.log('false');
        console.log(sum);
    }
}

solve(55355);