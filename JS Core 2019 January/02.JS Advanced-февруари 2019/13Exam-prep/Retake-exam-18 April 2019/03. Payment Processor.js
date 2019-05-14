class PaymentProcessor {

    constructor(options = {types: ["service", "product", "other"], precision:2}) {
        this.types = options.types;
        this.precision = options.precision;
        this.payments = [];
    }

    registerPayment(id, name, type, value) {
        if (id === '' || name === '' || !this.types.includes(type) || typeof value !== 'number') {
            throw new Error;
        } else {
            let payment = {
                id: id,
                name: name,
                type: type,
                value: value
            };

            this.payments.push(payment);
        }
    }

    deletePayment(id) {
        let paymentToDelete = this.payments.find((p) => p.id === id);
        if (paymentToDelete) {
            this.payments = this.payments.filter((p) => p.id !== id);
        } else {
            throw new Error;
        }
        return this.payments;
    }

    get(id) {
        // Details about payment ID: {this ID}
        let paymentToShow = this.payments.find((p) => p.id === id);
        if (paymentToShow) {
            let result  = `Details about payment ID: ${id}`;
            result += `\n- Name: ${paymentToShow.name}`;
            result += `\n- Type: ${paymentToShow.type}`;
            result += `\n- Value: ${paymentToShow.value.toFixed(2)}`;

            return result;
        } else {
            throw new Error;
        }
    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);


console.log(generalPayments.get('0001'));