function solve(examPoints, homeWorkCompleted, totalHomeWork) {
    let maxExamPoints = 400;
    let currentPoints = 0;
    let grade;
    let maxPoints = 100;

    if (examPoints === maxExamPoints) {
        grade = 6.00;
        console.log(grade.toFixed(2));
        return;
    }

    if (examPoints < 400) {
        currentPoints = (examPoints / maxExamPoints) * 0.90 * 100;
    }
    let pointsForHomeWork = (homeWorkCompleted / totalHomeWork) * 10;

    let totalPoints = currentPoints + pointsForHomeWork;

    grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);

    if (grade >= 3.00) {
        if (grade >= 6.00) {
            console.log(Math.floor(grade).toFixed(2));
        } else {
            console.log(grade.toFixed(2));
        }
    } else {
        grade = 2;
        console.log(grade.toFixed(2))
    }
}

solve(370, 5, 5);