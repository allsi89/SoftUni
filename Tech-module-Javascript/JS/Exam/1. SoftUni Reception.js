function solve(arr) {

    let studentsPerHour = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    let totalStudents = Number(arr[3]);
    let hours = 0;
    while (totalStudents > 0) {

        totalStudents -= studentsPerHour;
        hours++;

        if (hours % 4 === 0) {
            totalStudents -= 0;
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

solve([3, 2, 5, 40]);