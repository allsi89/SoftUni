function solve(name, lastName, hairColor) {
    let personData = {
        name,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(personData));
}

solve(
    'George',
    'Jones',
    'Brown');