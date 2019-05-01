function solve(input) {
    input.pop();
    let gladiators = new Map();

    for (let inputRow of input) {
        let tokens = inputRow.split(' -> ');

        if (tokens.length === 3) {
            let [name, technique, skill] = tokens;
            skill = +skill;

            if (!gladiators.has(name)) {
                gladiators.set(name, new Map());
            }
            let techniques = gladiators.get(name);

            if (!techniques.has(technique)) {
                techniques.set(technique, 0);
            }
            let oldSkill = techniques.get(technique);

            if (skill > oldSkill) {
                techniques.set(technique, skill);
            }
        }
        else {
            let [firstG, secondG] = inputRow.split(' vs ');
            battle(firstG, secondG);
        }
    }
    let sortedGladiators = [...gladiators]
        .sort(compareGladiators);

    for (let [name, techniquesMap] of sortedGladiators) {
        let totalSkill = [...techniquesMap]
            .map(x => x[1])
            .reduce((a, b) => a + b, 0);
        console.log(`${name}: ${totalSkill} skill`);

        let sortedTechs = [...techniquesMap]
            .sort(compareTech);

        for (let [techniqueName, techniqueSkill] of sortedTechs) {
            console.log(`- ${techniqueName} <!> ${techniqueSkill}`);
        }
    }

    function battle(firstGladiator, secondGladiator) {
        if (gladiators.has(firstGladiator) && gladiators.has(secondGladiator)) {
            let firstGladiatorTech = gladiators.get(firstGladiator);
            let secondGladiatorTech = gladiators.get(secondGladiator);
            let secondKeys = [...secondGladiatorTech.keys()];
            let common = [...firstGladiatorTech.keys()]
                .filter(g => secondKeys.includes(g));
            let firstGlSkill = 0;
            let secondGlSkill = 0;

            for (let tech of common) {
                firstGlSkill += firstGladiatorTech.get(tech);
                secondGlSkill += secondGladiatorTech.get(tech);
            }
            if (firstGlSkill > secondGlSkill) {
                gladiators.delete(secondGladiator);
            }
            if (firstGlSkill < secondGlSkill) {
                gladiators.delete(firstGladiator);
            }
        }
    }

    function compareGladiators(first, second) {
        let firstName = first[0];
        let secondName = second[0];
        let firstTechniques = first[1];
        let secondTechniques = second[1];

        let firstTotalSkill = [...firstTechniques]
            .map(x => x[1])
            .reduce((a, b) => a + b, 0);
        let secondTotalSkill = [...secondTechniques]
            .map(x => x[1])
            .reduce((a, b) => a + b, 0);

        let firtsCriteria = secondTotalSkill - firstTotalSkill;

        if (firtsCriteria === 0) {
            return firstName.localeCompare(secondName);
        }
        return firtsCriteria;
    }

    function compareTech(first, second) {
        let firstCriteria = second[1] - first[1];

        if (firstCriteria === 0) {
            return first[0].localeCompare(second[0]);
        }
        return firstCriteria;
    }
}

solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar']);