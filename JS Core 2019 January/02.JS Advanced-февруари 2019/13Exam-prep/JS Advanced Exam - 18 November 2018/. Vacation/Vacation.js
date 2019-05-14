class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;     // string
        this.destination = destination; // string
        this.budget = budget;           // number
        this.kids = {};
        this.counterOfKids = 0;
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        } else {
            if (!this.kids.hasOwnProperty(grade)) {
                this.kids[grade] = [`${name}-${budget}`];
                this.counterOfKids++;
                return this.kids[grade];
            } else {
                let isHere = this.kids[grade].find((g) => g.includes(name));

                if (isHere) {
                    return `${name} is already in the list for this ${this.destination} vacation.`
                } else {
                    this.kids[grade].push(`${name}-${budget}`);
                    this.counterOfKids++;
                    return this.kids[grade];
                }
            }
        }
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`;
        } else {
            let isHere = this.kids[grade].find((g) => g.includes(name));

            if (isHere) {
                this.kids[grade] = this.kids[grade].filter((kid) => !kid.includes(name));
                this.counterOfKids--;
                return this.kids[grade];
            } else {
                return `We couldn't find ${name} in ${grade} grade.`;
            }
        }
    }

    toString() {
        if (Object.keys(this.kids).length === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        let sortedGrades = Object.entries(this.kids)
            .sort((a, b) => a[0] - b[0]);

        let result = `${this.organizer} will take ${this.counterOfKids} children on trip to ${this.destination}\n`;
        for (let grade of sortedGrades) {
            result += `Grade: ${grade[0]}\n`;
            let kidNumber = 1;
            for (let kid of grade[1]) {
                result += `${kidNumber}. ${kid}\n`;
                kidNumber++;
            }
        }

        result.trim();
        return result
    }

   // get numberOfChildren() {
   //     return this.counterOfKids;
   // }
}


let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());
//console.log(Object.values(vacation.kids));
