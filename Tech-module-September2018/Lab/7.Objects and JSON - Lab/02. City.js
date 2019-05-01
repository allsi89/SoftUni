function solve(name, area, population, country, postCode) {
    let cityObj = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postCode
    };

    for (let key in cityObj) {
        console.log(`${key} -> ${cityObj[key]}`);
    }
}

solve("Sofia", " 492", "1238438", "Bulgaria", "1000");