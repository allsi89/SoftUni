function solve(commands) {
    let courses = commands
        .shift()
        .split(', ');


    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(':');
        let command = tokens[0];
        let exercise = `${tokens[1]}-Exercise`;


        if (command === 'course start') {
            let num = 1;
            for (let lesson of courses) {
                console.log(`${num}.${lesson}`);
                num++;
            }
        }

        else if (command === 'Add') {

            if (!courses.includes(tokens[1])) {
                courses.push(tokens[1]);
            }
        }
        else if (command === 'Insert') {
            let index = +tokens[2];
            Insert(tokens[1], index);
        }
        else if (command === 'Remove') {
            remove(tokens[1]);

            if (courses.includes(exercise)) {
                remove(exercise);
            }
        }
        else if (command === 'Swap') {
            swapping(tokens[1], tokens[2]);
        }
        else if (command === 'Exercise') {
            let index = courses.indexOf(tokens[1]);

            if (!courses.includes(tokens[1])) {
                courses.push(tokens[1]);
                courses.push(exercise);
            }
            else if (!courses.includes(exercise)) {
                courses.push(exercise);
            }
        }
    }

    function Insert(lesson, index) {

        if (!courses.includes(lesson)) {
            courses.splice(index, 0, lesson)
        }
    }

    function remove(lesson) {
        let index = courses.indexOf(lesson);

        if (courses.includes(lesson)) {
            courses.splice(index, 1);
        }
    }

    function swapping(first, second) {
        let firstIndex = courses.indexOf(first);
        let secondIndex = courses.indexOf(second);
        let firstEx = courses.indexOf(`${first}-Exercise`);
        let secondEx = courses.indexOf(`${second}-Exercise`);

        if (firstEx !== -1 && secondIndex !== -1 && firstIndex !== -1) {
            courses.splice(firstIndex, 1, second);
            courses.splice(secondIndex, 1, first);
            courses.splice(firstEx, 1, `${first}-Exercise`);
        } else if (secondIndex !== -1 && firstIndex !== -1 && secondEx !== -1) {
            courses.splice(firstIndex, 1, second);
            courses.splice(secondIndex, 1, first);
            courses.splice(secondEx, 1, `${second}-Exercise`);
        } else {
            courses.splice(firstIndex, 1, second);
            courses.splice(secondIndex, 1, first);
        }
    }
}

solve(['Arrays, Lists, Methods',
    'Swap:Arrays:Methods',
    'Exercise:Databases',
    'Swap:Lists:Databases',
    'Insert:Arrays:0',
    'course start']);