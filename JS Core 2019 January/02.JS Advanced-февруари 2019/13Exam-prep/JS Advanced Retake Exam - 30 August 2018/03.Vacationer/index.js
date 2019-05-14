class Vacationer {
                                     // set default value for credit card
    constructor(fullName, creditCard = [1111, '', 111]) {
        this.fullName = fullName;
        this.creditCard = creditCard;
        this.idNumber = this.generateIDNumber();
        this.wishList = [];

        return this;
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(creditCard) {
        if(creditCard.length !== 3) {
            throw new Error('Missing credit card information');
        }

        let cardNumber = creditCard[0];
        let expirationDate = creditCard[1];
        let securityNumber = creditCard[2];

        if (typeof cardNumber !== 'number' || typeof securityNumber !== 'number') {
            throw new Error('Invalid credit card details');
        }

        this._creditCard = {
            cardNumber: +cardNumber,
            expirationDate: expirationDate,
            securityNumber: +securityNumber
        };

    }

    get fullName() {
        return this._fullName;
    }

    set fullName(fullName){
        if(fullName.length !== 3) {
            throw new Error('Name must include first name, middle name and last name');
        }
        for(let firstLastNameLegacy of fullName){
            let regex = /^[A-Z][a-z]+$/g;
            if(!regex.test(firstLastNameLegacy)){
                throw new Error('Invalid full name');
            }
        }
        this._fullName = {
            firstName: fullName[0],
            middleName: fullName[1],
            lastName: fullName[2]
        };
    }

    generateIDNumber(){
        let vowel = ['a','e', 'o', 'i', 'u'];
        let generatedId = 231 * this._fullName.firstName.charCodeAt(0) + 139 * this._fullName.middleName.length;
        let lastNameChar = this._fullName.lastName.charAt(this._fullName.lastName.length - 1);

        if(vowel.indexOf(lastNameChar) > -1) {
            generatedId = '' + generatedId + 8;
        } else {
            generatedId = '' + generatedId + 7;
        }
        return generatedId;
    }

    addCreditCardInfo(input){
        this.creditCard = input;

        return this;
    }

    addDestinationToWishList(destination){
        if(this.wishList.includes(destination)){
            throw new Error('Destination already exists in wishlist');
        }

        this.wishList.push(destination);
        this.wishList.sort( (a, b) => a.length - b.length);

        return this;
    }

    getVacationerInfo(){

        let result = `Name: ${this._fullName.firstName} ${this._fullName.middleName} ${this._fullName.lastName}\n`;
        result += `ID Number: ${this.idNumber}\n`;
        result += `Wishlist:\n`;

        if(this.wishList.length === 0) {
            result += `empty\n`;
        } else {
            result += `${this.wishList.join(', ')}\n`;
        }

        result += `Credit Card:\n`;
        result += `Card Number: ${this._creditCard.cardNumber}\n`;
        result +=  `Expiration Date: ${this._creditCard.expirationDate}\n`;
        result += `Security Number: ${this._creditCard.securityNumber}`;

        return result;
    }
}

let test1 = new Vacationer(['pesho','Peshov', 'Peshov'],'234234', [22345,'26/10',12364])
console.log(test1);