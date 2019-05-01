function solve(input) {
    let journal = input.shift().split(', ');

    let commands = input;

    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(' - ');
        let currentCom = tokens[0];

        if (currentCom === 'Start') {
            add(tokens[1]);
        }
        else if (currentCom === 'Complete') {
            remove(tokens[1]);
        }
        else if (currentCom === 'Side Quest') {
            let [quest, sideQuest] = tokens[1].split(':');
            side(quest, sideQuest);
        }
        else if (currentCom === 'Renew') {
            swap(tokens[1]);
        }
        else if (currentCom === 'Retire!') {
            console.log(journal.join(', '));
            break;
        }
    }

    function add(command) {
        if (!journal.includes(command)) {
            journal.push(command);
        }
    }

    function remove(command) {
        let index = journal.indexOf(command);

        if (journal.includes(command)) {
            journal.splice(index, 1);
        }
    }

    function side(quest, sideQuest) {
        let index = journal.indexOf(quest);

        if (journal.includes(quest) && !journal.includes(sideQuest)) {
            journal.splice(index + 1, 0, sideQuest);
        }
    }

    function swap(quest) {
        let index = journal.indexOf(quest);

        if (journal.includes(quest)) {
            journal.splice(index, 1);
            journal.push(quest);
        }
    }
}

solve([]);