class Stringer {
    constructor(string, initialLength) {
        this.innerString = string;
        this.innerLength = initialLength;
    }

    increase(length) {
        length = Number(length);
        return this.innerLength += length;
    }

    decrease(length) {
        length = Number(length);

        if (this.innerLength - length < 0) {
            return this.innerLength = 0;
        }

        this.innerLength -= length
    }

    toString() {
        let initialStringLength = this.innerString.length;
        let currentLength = this.innerLength;

        if (initialStringLength <= currentLength) {
            return this.innerString;
        } else {
            let diff = initialStringLength - currentLength;
            let output = this.innerString.substr(0, initialStringLength - diff);
            output += '...';
            return output;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString());
