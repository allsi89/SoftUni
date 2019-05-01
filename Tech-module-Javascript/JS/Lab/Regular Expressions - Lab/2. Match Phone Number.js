function solve(phones) {
    let regex = /\+[359]{3}(\s|\-)2{1}\1[0-9]{3}\1[0-9]{4}\b/g;
    let validPhones = [];
    
    while ((valid = regex.exec(phones)) !== null) {
        validPhones.push(valid[0]);
    }
    console.log(validPhones.join(', '));
}

solve(
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
);