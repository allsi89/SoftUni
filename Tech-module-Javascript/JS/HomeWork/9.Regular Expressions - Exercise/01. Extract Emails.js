function solve(text) {
    let regex = /([\w\.\-\d]+)@(\w+[\.\_\-]\w+)([\.\_]\w+)*/g;
    let emails = [];

    while ((validEmails = regex.exec(text)) !== null) {
        emails.push(validEmails[0]);

    }

    for (let currentEmail of emails) {
        if (!currentEmail.startsWith('.') && !currentEmail.startsWith('-')
        && !currentEmail.startsWith('_')) {
            console.log(currentEmail);
        }
    }
}

solve('Examples of valid emails:' +
    ' info@softuni-bulgaria.org,' +
    ' kiki@hotmail.co.uk,' +
    ' no-reply@github.com,' +
    ' s.peterson@mail.uu.net,' +
    ' info-bg@software-university.software.academy. ');