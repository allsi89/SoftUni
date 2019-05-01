function solve(name, last, age) {
    let person = {
        firstName: name,
        lastName: last,
        age: age
    };

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

solve("Peter", "Pan", "20");