class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.roomsPricing = {
            single: 50,
            double: 90,
            maisonette: 135
        };

        this.servicesPricing = {
            food: 10,
            drink: 15,
            housekeeping: 25
        };

        if (this.capacity % 2 !== 0) {
            this.capacity -= 1;
        }
        this.avaivables = {
            single: Math.floor(this.capacity * 0.5),
            double: Math.floor(this.capacity * 0.3),
            maisonette: Math.floor(this.capacity * 0.2)
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.avaivables[roomType] <= 0) {
            let output = [];
            output.push(`No ${roomType} rooms available!`);
            let keys = Object.keys(this.avaivables).filter(x => this.avaivables[x] > 0);

            for (const room of keys) {
                output.push(`Available ${room} rooms: ${this.avaivables[room]}.`);
            }

            return output.join(' ');
        }

        let output = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`;
        let obj = {
            clientName,
            roomType,
            nights,
            currentBookingNumber: this.currentBookingNumber
        }

        this.bookings.push(obj);
        this.currentBookingNumber += 1;
        this.avaivables[roomType] -= 1;


        return output;
    }

    roomService(currentBookingNumber, serviceType) {
        let currentRoom = this.bookings.filter(x => x.currentBookingNumber === currentBookingNumber);

        if (currentRoom.length === 0) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }

        if (!currentRoom[0].hasOwnProperty('services')) {
            currentRoom[0]['services'] = [];
        }

        currentRoom[0]['services'].push(serviceType);

        return `Mr./Mrs. ${currentRoom[0]['clientName']}, Your order for ${serviceType} service has been successful.`;
    }

    checkOut(currentBookingNumber) {
        let currentRoom = this.bookings.filter(x => x.currentBookingNumber === currentBookingNumber)[0];
        if (!currentRoom) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        let totalMoney = 0;

        let roomType = currentRoom['roomType'];
        this.avaivables[roomType] += 1;
        this.bookings = this.bookings.filter(x => x.currentBookingNumber !== currentBookingNumber);

        totalMoney = this.roomsPricing[roomType] * currentRoom['nights'];
        if (!currentRoom['services']) {
            return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom['clientName']}. The total amount of money you have to pay is ${totalMoney} BGN.`
        }
        let totalServiceMoney = 0;
        for (const service of currentRoom['services']) {
            totalServiceMoney += this.servicesPricing[service];
        }
        return `We hope you enjoyed your time here, Mr./Mrs. ${currentRoom['clientName']}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
    }

    report() {
        let output = [];
        output.push(`${this.name.toUpperCase()} DATABASE:`);
        output.push(`${'-'.repeat(20)}`);

        if (this.bookings.length === 0) {
            output.push(`There are currently no bookings.`);

            return output.join('\n');
        }

        let midOutput = [];
        for (const room of this.bookings) {
            let curr = [];
            curr.push(`bookingNumber - ${room['currentBookingNumber']}`);
            curr.push(`clientName - ${room['clientName']}`);
            curr.push(`roomType - ${room['roomType']}`);
            curr.push(`nights - ${room['nights']}`);

            if (room['services']) {
                let server = [];
                for (const serv of room['services']) {
                    server.push(`${serv}`);
                }
                curr.push('services: ' + server.join(', '));
            }
            midOutput.push(curr.join('\n'));
        }
        output.push(midOutput.join(`\n${'-'.repeat(10)}\n`))

        return output.join('\n').trim();
    }
}
let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
//hotel.rentARoom('Geroge', 'maisonette', 6);

//console.log(hotel.bookings.length);

//console.log(hotel.checkOut(2));
//console.log(hotel.bookings.length);

//console.log(hotel.roomService(3, 'housekeeping'));
//console.log(hotel.bookings);
//console.log(hotel.roomService(3, 'drink'));
//console.log(hotel.bookings);

//console.log(hotel.roomService(2, 'room'));
console.log(hotel.report());
