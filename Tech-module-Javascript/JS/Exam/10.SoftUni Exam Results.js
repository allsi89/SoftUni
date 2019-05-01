function solve(input) {
    input.pop();
    let students = {};
    let languagesObject = {};

    for (let row of input) {
        let tokens = row.split('-');
        let username = tokens[0];

        if (tokens.length === 3) {
            let language = tokens[1];
            let points = +tokens[2];

            if (!students.hasOwnProperty(username)) {
                students[username] = points;

            } else {
                let currentPoints = points;
                if (students[username] < currentPoints) {
                    students[username] = currentPoints;
                }
            }
            if (!languagesObject.hasOwnProperty(language)) {
                languagesObject[language] = 1;
            } else {
                languagesObject[language]++;
            }
        } else if (tokens.length === 2) {
            delete students[username];
        }
    }
    let sortedStudents = Object.entries(students)
        .sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });

    console.log(`Results:`);
    for (let student of sortedStudents) {
        let [name, points] = student;
        console.log(`${name} | ${points}`);
    }

    console.log(`Submissions:`);

    let sortedLanguages = Object.entries(languagesObject)
        .sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });

    for (let l of sortedLanguages) {
        let [name, count] = l;
        console.log(`${name} - ${count}`);
    }
}

solve([
    'Pesho-Java-91',
    'Gosho-C#-84',
    'Kiro-JavaScript-90',
    'Kiro-C#-50',
    'Kiro-banned',
    'exam finished'
]);