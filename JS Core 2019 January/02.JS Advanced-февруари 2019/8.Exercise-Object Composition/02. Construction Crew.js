function solve(workerObject) {
    if (workerObject.handsShaking === true) {
        let requiredAmountOfAlcohol = 0.1 * workerObject.weight * workerObject.experience;
        workerObject.bloodAlcoholLevel += requiredAmountOfAlcohol;
        workerObject.handsShaking = false;

        return workerObject;
    } else {
        return workerObject;
    }
}

console.log(solve(
    { weight: 80,
        experience: 1,
        bloodAlcoholLevel: 0,
        handsShaking: true }


));