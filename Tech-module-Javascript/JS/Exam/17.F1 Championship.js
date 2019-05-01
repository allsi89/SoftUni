function solve(input) {
    let teams = {};

    for (let row of input) {
        let [teamName, pilotName, pilotPoints] = row.split(' -> ');
        pilotPoints = +pilotPoints;

        if (!teams.hasOwnProperty(teamName)) {
            teams[teamName] = {};
            teams[teamName].totalPoints = 0;

        }
        if (!teams[teamName].hasOwnProperty(pilotName)) {
            teams[teamName][pilotName] = pilotPoints;
            teams[teamName].totalPoints += pilotPoints;
        } else if (teams[teamName].hasOwnProperty(pilotName)) {
            teams[teamName][pilotName] += pilotPoints;
            teams[teamName].totalPoints += pilotPoints;
        }
    }

    let sortedTeams = Object.entries(teams).sort((a,b) => {
        return b[1].totalPoints - a[1].totalPoints;
    });
    sortedTeams = sortedTeams.slice(0, 3);

    for (let t of sortedTeams) {
        let name = t[0];
        let teamPoints = t[1].totalPoints;
        console.log(`${name}: ${teamPoints}`);

        let pilots = Object.entries(t[1]);
        pilots.shift();
        pilots = pilots.sort((a,b) => {
            return b[1] - a[1];
        })

        for (let p of pilots) {
           let [name, points] = p;
           console.log(`-- ${name} -> ${points}`);
        }
    }
}

solve(
    [
       'Ferrari -> Sebastian Vettel -> 18',
       'Ferrari -> Kimi Raikonnen -> 25',
       'Mercedes -> Lewis Hamilton -> 10',
       'Mercedes -> Valteri Bottas -> 8',
       'Red Bull -> Max Verstapen -> 6',
       'Red Bull -> Daniel Ricciardo -> 4',
       'Mercedes -> Lewis Hamilton -> 25',
        'Mercedes -> Valteri Bottas -> 18',
        'Haas -> Romain Grosjean -> 25',
        'Haas -> Kevin Magnussen -> 25'
    ]
);