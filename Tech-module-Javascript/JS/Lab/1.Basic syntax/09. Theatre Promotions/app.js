function theatre(day, age) {
    let typoOfDay = day;
    let ageOfPerson = Number(age);
    let kids = (age >= 0 && age <= 18);
    let midAge = (age > 18 && age <= 64);
    let elder = (age > 64 && age <= 122);

    if (typoOfDay === "Weekday") {
        if (kids || elder) {
            console.log("12$");
        } else if (midAge) {
            console.log("18$");
        } else {
            console.log("Error!");

        }
    } else if (typoOfDay === "Weekend") {
        if (kids || elder) {
            console.log("15$");
        }
        else if (midAge) {
            console.log("20$");
        }
        else {
            console.log("Error!");

        }
    } else if (typoOfDay === "Holiday") {
        if (kids) {
            console.log("5$");
        } else if (midAge) {
            console.log("12$");
        } else if (elder) {
            console.log("10$");
        } else {
            console.log("Error!");
        }
    }
}
theatre("Weekday", -13);