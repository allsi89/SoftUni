function calculator(first, operator,second) {

    switch (operator) {
        case '+' :
            console.log((first+second).toFixed(2));
            break
        case '-' :
            console.log((first-second).toFixed(2));
            break
        case '/' :
            console.log((first/second).toFixed(2));
            break
        case '*' :
            console.log((first*second).toFixed(2));
            break
    }
}
calculator(25.5, '-', 3);