function solve(arr) {
    let map = new Map();

    for (let string of arr) {
        let tokens = string.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (map.has(name)) {
            let existingGrades = map.get(name);
            grades = existingGrades.concat(grades);
            map.get(name, existingGrades);
        }
        map.set(name, grades);

    }
    let sorted = [...map.entries()].sort((a, b) => {
        return average(a[1]) - average(b[1]);
    });

    for (let [name, grades] of sorted) {
        grades = grades.join(', ');
        console.log(`${name}: ${grades}`);
    }

    function average(grades) {
        let sum = 0;

        for (let grade of grades) {
            sum += grade
        }
        return sum / grades.length;
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);