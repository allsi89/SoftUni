function solve(input) {
    //  let companies = new Map();

    //  for (let inputRow of input) {
    //      let [company, id] = inputRow.split(' -> ');

    //      if (!companies.has(company)) {
    //          companies.set(company, []);
    //      }

    //      let employees = companies.get(company);

    //      if (!employees.includes(id)) {//
    //          employees.push(id);
    //      }
    //  }
    //  let sorted = [...companies]
    //      .sort((a, b) => {
    //          return a[0].localeCompare(b[0]);
    //      });

    //  for (let [name, employees] of sorted) {
    //      console.log(name);

    //      let outputString = employees
    //          .map(e => `-- ${e}`)
    //          .join('\n');
    //      console.log(outputString);
    //  }

    let companies = {};

    for (let inputRow of input) {
        let [companyName, id] = inputRow.split(' -> ');

        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }

        let employees = companies[companyName];

        if (!employees.includes(id)) {
            employees.push(id);
        }
    }

    let sorted = Object.entries(companies)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [companyName, employees] of sorted) {
        console.log(companyName);

        let output = employees
            .map(e => `--${e}`)
            .join('\n');
        console.log(output);
    }

}

solve(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);