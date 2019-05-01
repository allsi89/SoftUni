function solve(dates) {
    let regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    let validDates = [];

    while ((validD = regex.exec(dates)) !== null) {
        let day = validD.groups['day'];
        let month = validD.groups['month'];
        let year = validD.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

solve('13/Jul/1928, 10-Nov-1934, 25.Dec.1937 01/Jan-1951, 23/sept/1973, 1/Feb/2016');