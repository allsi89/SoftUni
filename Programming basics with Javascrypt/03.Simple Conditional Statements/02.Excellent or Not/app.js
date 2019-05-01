function excellentOrNot([input]) {

    let grade = Number(input);

    if (grade >= 5.50) {
        console.log("Excellent!");
    } else {
        console.log("Not excellent.");
    }
}
excellentOrNot([5.23]);