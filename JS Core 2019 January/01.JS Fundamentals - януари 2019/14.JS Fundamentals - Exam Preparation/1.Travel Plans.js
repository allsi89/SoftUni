function solve(arr) {
    let specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy =['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];

    let specCounter = 0;
    let clumsyCounter = 0;

    let goldAmount = 0;

    for (let row of arr) {
        let [proffesion, goldOffer] = row.split(' : ');
        goldOffer = Number(goldOffer);

        if (specialized.includes(proffesion) && goldOffer >= 200) {
            specCounter++;
            goldAmount += goldOffer * 0.8;

            if (specCounter % 2 === 0) {
                goldAmount += 200;
            }
        } else if (clumsy.includes(proffesion)) {
            clumsyCounter++;

            if (clumsyCounter % 2 === 0) {
                goldAmount += goldOffer * 0.95;
            } else if (clumsyCounter % 3 === 0) {
                goldAmount += goldOffer * 0.90;
            } else {
                goldAmount += goldOffer;
            }
        } else if (average.includes(proffesion)) {
            goldAmount += goldOffer;
        }
    }

    if (goldAmount >= 1000) {
        let diff = goldAmount - 1000;
        console.log(`Final sum: ${goldAmount.toFixed(2)}\nMariyka earned ${diff.toFixed(2)} gold more.`);
    } else {
        let diff = 1000 - goldAmount;
        console.log(`Final sum: ${goldAmount.toFixed(2)}\nMariyka need to earn ${diff.toFixed(2)} gold more to continue in the next task.`)
    }
}

solve([
    "Programming : 500",
    "Driving : 243.55",
    "Acting : 200",
    "Singing : 100",
    "Cooking : 199",
    "Hardware maintenance : 800",
    "Gardening : 700",
    "Programming : 500"]);