class Organization {

    constructor(name, budget) {
        // name must be string,  employees -> array, budget -> number
        this.name = name;
        this.employees = [];
        this.budget = budget;
        this.departmentsBudget = {
            marketing: Number(this.budget) * 0.4,
            finance: Number(this.budget) * 0.25,
            production: Number(this.budget) * 0.35
        }
    }

    get name() {
        return this._name
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw new Error();
        }
        this._name = name;
    }

    get budget() {
        return this._budget;
    }

    set budget(budget) {
        if (typeof budget !== 'number') {
            throw new Error();
        }
        return this._budget = budget;
    }

    add(employeeName, department, salary) {
        // string, string, number

        if (this.departmentsBudget[department] >= salary) {
            let employee = {
                'employeeName': employeeName,
                'department': department,
                'salary': salary

            };
            if (typeof employeeName !== "string" || typeof department !== "string" || typeof salary !== "number") {

            } else {
                this.employees.push(employee);
                this.departmentsBudget[department] -= salary;

                return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
            }

        } else {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is ${this.departmentsBudget[department]}.`
        }
    }

    employeeExists(employeeName) {
        // string
        let searchedEmployee = this.employees.find((p) => p.employeeName === employeeName);
        if (searchedEmployee) {
            return `Mr./Mrs. ${employeeName} is part of the ${searchedEmployee.department} department.`;
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }

    leaveOrganization(employeeName) {
        let searchedEmployee = this.employees.find((p) => p.employeeName === employeeName);
        if (searchedEmployee) {
            let indexOfEmployee = this.employees.indexOf(searchedEmployee);

            this.departmentsBudget[searchedEmployee.department] += searchedEmployee.salary;
            let result = `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;

            this.employees.splice(indexOfEmployee,1)
           // this.employees = this.employees.filter((p) => p.employeeName !== employeeName);
            return result;

        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
        }
    }

    status() {
        // marketing department
        let marketing = this.employees.filter((p) => p.department === 'marketing')
            .sort((a,b) => b.salary - a.salary);
        let marketingArr = [];
        for (const employee of marketing) {
            let name = employee.employeeName;
            marketingArr.push(name);
        }
        let marketingOutput = marketingArr.join(', ');

        // production department
        let production = this.employees.filter((p) => p.department === 'production')
            .sort((a,b) => b.salary - a.salary);
        let productionArr = [];
        for (const employee of production) {
            let name = employee.employeeName;
            productionArr.push(name);
        }
        let productionOutput = productionArr.join(', ');

        // finance department
        let finance = this.employees.filter((p) => p.department === 'finance')
            .sort((a,b) => b.salary - a.salary);

        let financeArr = [];
        for (const employee of finance) {
            let name = employee.employeeName;
            financeArr.push(name);
        }
        let financeOut = financeArr.join(', ');


        let result = `${this.name.toUpperCase()} DEPARTMENTS:`;
        if (marketing.length > 0) {
            result += `\nMarketing | Employees: ${marketing.length}: ${marketingOutput} | Remaining Budget: ${this.departmentsBudget.marketing}`;
        } else {
            result += `\nMarketing | Employees: ${marketing.length}: | Remaining Budget: ${this.departmentsBudget.marketing}`;
        }

        if (finance.length > 0) {
            result += `\nFinance | Employees: ${finance.length}: ${financeOut} | Remaining Budget: ${this.departmentsBudget.finance}`;
        } else {
            result += `\nFinance | Employees: ${finance.length}: | Remaining Budget: ${this.departmentsBudget.finance}`;
        }

        if (production.length > 0) {
            result += `\nProduction | Employees: ${production.length}: ${productionOutput} | Remaining Budget: ${this.departmentsBudget.production}`
        } else {
            result += `\nProduction | Employees: ${production.length}: | Remaining Budget: ${this.departmentsBudget.production}`
        }
        return result
    }
}
let organization = new Organization('Pes2ho', 11000);

console.log(organization.add('Gosho', 'marketing', '800'));
console.log(organization.add('Peter', 'marketing', 1800));
console.log(organization.add('Anton', 'marketing', 1400));
console.log(organization.add('Rangel', 'finance', 800));
console.log(organization.add('Stamat', 'finance', 900));
//console.log(organization.add('Gencho', 'production', 100));
//console.log(organization.add('Ivan', 'production', 110));
console.log(organization.name);


//console.log(organization.status());



