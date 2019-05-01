function solve(arr) {
    arr.pop();
    let personObject = {};

    for (let dataString of arr) {

        if (dataString.includes('->')) {
            let [person, technique, skill] = dataString.split(' -> ');
            skill = Number(skill);

            if (!(person in personObject)) {
                personObject[person] = {[technique]: skill};
            }
            else {
                if (technique in personObject[person]) {
                    if (personObject[person][technique] < skill) {
                        personObject[person][technique] = skill;
                    }
                } else {
                    personObject[person][technique] = skill;
                }
            }
        } else {
            let [person1, person2] = dataString.split(' vs ');
            if (person1 in personObject && person2 in personObject) {
                let arrTechniques = intersection(personObject[person1], personObject[person2]);
                function intersection(o1, o2) {
                    return Object.keys(o1).filter({}.hasOwnProperty.bind(o2));
                }
                if (arrTechniques.length > 0) {
                    let [sum1, sum2] = [0, 0];
                    for (let tech of arrTechniques) {
                        sum1 += personObject[person1][tech];
                    }
                    for (let tech of arrTechniques) {
                        sum2 += personObject[person2][tech];
                    }
                    if (sum1 < sum2) {
                        delete personObject[person1];
                    } else if (sum1 > sum2) {
                        delete personObject[person2];
                    }
                }
            }
        }
    }
    let printArr = [];

    for (let person in personObject) {
        let sumSkill = 0;
        for (let skill in personObject[person]) {
            sumSkill += personObject[person][skill];
        }
        printArr.push([person, sumSkill]);
    }

    let sortedPrintArray = printArr.sort((a, b) => b[1] - a[1]);

    for (let person of sortedPrintArray) {
        console.log(`${person[0]}: ${person[1]} skill`);
        let sortedTechniques = Object
            .keys(personObject[person[0]])
            .sort()
            .sort((a,b) => personObject[person[0]][b] - personObject[person[0]][a]);
        for (let tech of sortedTechniques) {
            console.log(`- ${tech} <!> ${personObject[person[0]][tech]}`)
        }
    }
}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar']);