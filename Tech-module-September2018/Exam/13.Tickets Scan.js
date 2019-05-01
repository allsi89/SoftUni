function solve(text, info) {
    let namePattern = /(?<= )[A-Z][A-Za-z]*-([A-Z][A-Za-z]*\.-)?[A-Z][A-Za-z]*(?= )/;
    let airportPattern = /(?<= )[A-Z]{3}\/[A-Z]{3}(?= )/;
    let flightPattern = /(?<= )[A-Z]{1,3}\d{1,5}(?= )/;
    let companyPattern = /(?<=- )[A-Z][A-Za-z]*\*[A-Z][A-Za-z]*(?= )/;

    let name = text.match(namePattern)[0];
    name = name.replace(/-/g, ' ');

    let airport = text.match(airportPattern)[0];
    airport = airport.split('/');

    let flight = text.match(flightPattern)[0];

    let company = text.match(companyPattern)[0];
    company = company.replace('*', ' ');

    if (info === 'name') {
        console.log(`Mr/Ms, ${name}, have a nice flight!`);
    }
    else if (info === 'flight') {
        let [fromAirport, toAirport] = airport;
        console.log(`Your flight number ${flight} is from ${fromAirport} to ${toAirport}.`)
    }
    else if (info === 'company') {
        console.log(`Have a nice flight with ${company}.`);
    }
    else if (info === 'all') {
        let [fromAirport, toAirport] = airport;
        console.log(`Mr/Ms, ${name}, your flight number ${flight} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`);
    }
}

solve('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ',
    'all');