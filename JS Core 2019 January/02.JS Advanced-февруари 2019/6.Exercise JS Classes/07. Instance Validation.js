class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    get email() {
        return this._email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set clientId(clientId) {
        let lengthValidation = clientId.length === 6;
        let numberValidation = Number.isInteger(+clientId);

        if (lengthValidation && numberValidation) {
            this._clientId = clientId;
        } else {
            throw new TypeError("Client ID must be a 6-digit number");
        }
    }

    set email(value) {
        if (!(/([\w]+@[a-zA-Z\.]+)/gm).test(value)) {
            throw new TypeError("Invalid e-mail");
        }
        this._email = value;
    }

    set firstName(value) {
        let nameLength = value.length >= 3 && value.length <= 20;
        let latinLettersValidation = (/^[A-Za-z]+$/gm).test(value);

        if (!nameLength) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }

        if (!latinLettersValidation) {
            throw new TypeError("First name must contain only Latin characters");
        }
        this._firstName = value;
    }

    set lastName(value) {
        let nameLength = value.length >= 3 && value.length <= 20;
        let latinLettersValidation = (/^[A-Za-z]+$/gm).test(value);

        if (!nameLength) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }

        if (!latinLettersValidation) {
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = value;
    }
}

let test = new CheckingAccount('131445', 'ivan@some.com', 'Ivan', 'Petrov');
console.log(test);