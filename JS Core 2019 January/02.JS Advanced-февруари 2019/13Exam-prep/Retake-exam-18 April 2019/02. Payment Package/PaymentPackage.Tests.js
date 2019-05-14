//const PaymentPackage = require('./PaymentPackage');
//const expect = require('chai').expect;
//const assert = require('chai').assert;

let AutoService = require('./02.autoServise');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('AutoService', function () {
    let auto = new AutoService(20);

    it('should have 2 props', function () {
        assert.property(auto, 'workInProgress');
        assert.property(auto, 'backlogWork');
        assert.property(auto, 'garageCapacity')
    });

    it('additional props must be empty arrays', function () {
        assert.isArray(auto.workInProgress);
        assert.isArray(auto.backlogWork);
        assert.isEmpty(auto.workInProgress);
        assert.isEmpty(auto.backlogWork);
    });

    it('should have getter available space', function () {
        let auto = new AutoService(10);
        let expected = 10;
        assert.equal(auto.availableSpace, expected);
    });
    it('should decrease garage\'s space if car is entered the garage', function () {
        let auto = new AutoService(10);
        auto.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        assert.equal(auto.availableSpace, 9)
    });

    describe('signupForReview function', function () {
        it('should add the car in "work in progress array if there is a free slot"', function () {
            let auto = new AutoService(10);
            auto.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            let expected = {
                plateNumber: 'CA1234CA',
                clientName: 'Peter',
                carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}
            };

            assert.deepEqual(auto.workInProgress, [expected]);
        });

        it('should add the car in backlogWork if there is no space in the garage', function () {
            let auto = new AutoService(0);
            auto.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            let expected = {
                plateNumber: 'CA1234CA',
                clientName: 'Peter',
                carInfo: {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}
            };

            assert.deepEqual(auto.backlogWork, [expected]);
        });
    });

    describe('function carInfo', function () {
        it('should not show current car if it not exists', function () {
            let auto = new AutoService(10);
            auto.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});


            assert.equal(auto.carInfo('PB9999PB', 'PHILIP'), 'There is no car with platenumber PB9999PB and owner PHILIP.');
        });

        it('should show the car', function () {
            let auto = new AutoService(100);
            auto.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            auto.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});

            let expected = {
                plateNumber: 'CA1234CA',
                clientName: 'Peter',
                carInfo:
                    {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'}};

            assert.deepEqual(auto.carInfo('CA1234CA', 'Peter'), expected)
        });
    })
});

