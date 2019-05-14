function solve(arr) {
    let companies = arr.shift();
    let delimeter = arr.shift() + ' ';
    companies = companies.split(delimeter);
    let validSentences = [];
    let invalidSentences = [];

    for (let sentence of arr) {
        let counter = 0;
        sentence = sentence.toLowerCase();
        if (sentence.includes(...companies)) {
            validSentences.push(sentence)
        } else {
            invalidSentences.push(sentence)
        }
    }

    if (validSentences.length > 0) {
        console.log('ValidSentences');
        let counter = 0;

        for (let v of validSentences) {
            counter++;
            console.log(`${counter}. ${v}`);
        }

        if (invalidSentences.length > 0) {
            console.log(`==============================`);
            console.log('InvalidSentences');
            let counter = 0;

            for (let v of invalidSentences) {
                counter++;
                console.log(`${counter}. ${v}`);
            }
        }
    } else if (invalidSentences.length > 0) {
        console.log('InvalidSentences');
        let counter = 0;

        for (let v of invalidSentences) {
            counter++;
            console.log(`${counter}. ${v}`);
        }
    }
}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]

);
