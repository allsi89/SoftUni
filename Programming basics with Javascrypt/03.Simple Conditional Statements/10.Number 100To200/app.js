function number100To200([arg1]) {
    let num = Number(arg1);
    if (num < 100) {
        console.log("Less than 100");
    } else if (num > 200) {
        console.log("Greater than 200");
    } else {
        console.log("Between 100 and 200");
    }
}
number100To200([125]);