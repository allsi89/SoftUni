function leapYear(num) {

    let year = Number(num);
    
    if (year % 400 === 0) {
        console.log("yes");

    } else if (year % 100 === 0) {
        console.log("no");

    } else if (year % 4 === 0) {
        console.log("yes");

    } else {
        console.log("no");

    }
}
leapYear(2003);