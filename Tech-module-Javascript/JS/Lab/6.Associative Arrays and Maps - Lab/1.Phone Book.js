function solve(contacts) {
    let phones = [];

    for (let contact of contacts) {
        contact = contact.split(' ');
        let name = contact[0];
        let phoneNumber = contact[1];
        phones[name] = phoneNumber;
    }

    for (let name in phones) {
        console.log(`${name} -> ${phones[name]}`);
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);