let HolidayPackage = require('./HolidayPackage');
let assert = require('chai').assert;

describe('HolidayPackage', function () {
    let holidayPackage = new HolidayPackage;

    it('should has property "destination" and "season"', function () {
        assert.property(holidayPackage, 'destination');
        assert.property(holidayPackage, 'season');
        assert.property(holidayPackage, 'insuranceIncluded');
    });
    it('should has property "insuranceIncluded" which is bool', function () {
        let result = typeof holidayPackage.insuranceIncluded;
        let expected = "boolean";
        assert.equal(result, expected);
    });

    describe('showVacationers', function () {
        let holidayPackage;
        beforeEach(() => {
            holidayPackage = new HolidayPackage();
        });

        it('standart', function () {
            holidayPackage.addVacationer('Ivan Ivanov');
            holidayPackage.addVacationer('Petar Petrov');
            holidayPackage.addVacationer('Georgi Georgiev');

            let result = holidayPackage.showVacationers();
            let expected = `Vacationers:\nIvan Ivanov\nPetar Petrov\nGeorgi Georgiev`;
            assert.equal(result, expected);
        });

        it('should return corresponding message if there are no vacationers', function () {
            let result = holidayPackage.showVacationers();
            let expected = "No vacationers are added yet";
            assert.equal(result, expected);
        });
    });

    describe('addVacationer', function () {
        let holidayPackage;
        beforeEach(() => {
            holidayPackage = new HolidayPackage();
        });

        it('should add the vacationer', function () {
            holidayPackage.addVacationer('Ivan Ivanov');

            assert.equal(holidayPackage.vacationers, 'Ivan Ivanov');
        });

        it('should throw error if we did not pass a string', function () {
            assert.throw(() => holidayPackage.addVacationer(1234), 'Vacationer name must be a non-empty string');
            assert.throw(() => holidayPackage.addVacationer(' '), 'Vacationer name must be a non-empty string');
        });

        it('should throw error if the name do not consist first name and last name', function () {
            assert.throw(() => holidayPackage.addVacationer('Ivan'), 'Name must consist of first name and last name')
        });
    });

    describe('generateHolidayPackage', function () {
        let holidayPackage;
        it('should throw error if number of vacationers are 0', function () {
            holidayPackage = new HolidayPackage();
            assert.throw(() => holidayPackage.generateHolidayPackage(), 'There must be at least 1 vacationer added')
        });

        it('should increase the total price if the sesaon is winter or summer', function () {
            holidayPackage = new HolidayPackage('Scotland', 'Summer');
            holidayPackage.addVacationer('Ivan Ivanov');

            let result = holidayPackage.generateHolidayPackage();
            let expected = `Holiday Package Generated\n` +
            `Destination: ${holidayPackage.destination}\n` +
            `${holidayPackage.showVacationers()}\n` +
            `Price: ${holidayPackage.vacationers.length * 400 + 200}`;
            assert.equal(result, expected);
        });
    })
});