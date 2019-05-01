function solve(input) {
    input.pop();
    let participants = {};
    let participantsInput = input
        .shift()
        .split(', ');
    let lettersReg = /([A-Za-z]+)/g;
    let digitsReg = /(\d)/g;

    for (let p of participantsInput) {
        participants[p] = 0;
    }

    for (let row of input) {
        let currentParticipant = row.match(lettersReg)
            .join('');

        let currentDistance = row.match(digitsReg)
            .map(Number)
            .reduce((a, b) => a + b, 0);

        if (participants.hasOwnProperty(currentParticipant)) {
            participants[currentParticipant] += currentDistance;
        }
    }
    let sortedParticipants = Object.entries(participants)
        .sort((a, b) => {
            return b[1] - a[1];
        })
        .slice(0, 3)
        .map(kvp => kvp[0]);

    console.log(`1st place: ${sortedParticipants[0]}`);
    console.log(`2nd place: ${sortedParticipants[1]}`);
    console.log(`3rd place: ${sortedParticipants[2]}`);
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);