let mathEnforcer = require('./04.MathEnforcer');
let expect = require('chai').expect;


describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return "undefined" if we pass a non-number parameter', function () {
            let number = '5';
            let expected = mathEnforcer.addFive(number);
            expect(expected).to.equal(undefined);
        });

        it('should return "5 added to number" if we pass valid number', function () {
            let num = 5;
            let expected = mathEnforcer.addFive(num);
            expect(expected).to.equal(num + 5);
        });

        it('should return "5 added to number" if we pass valid number', function () {
            let num = -3;
            let expected = mathEnforcer.addFive(num);
            expect(expected).to.equal(num + 5);
        });

        it('should return "correct answer" if we pass a floating point number within 0.01', function () {
            let number = 2.34;
            let expected = mathEnforcer.addFive(number);
            expect(expected).to.be.closeTo(number + 5, 0.01);
        });
    });

    describe('subtractTen', function () {
        it('should return "undefined" if we pass a num array', function () {
            let num = [5];
            let expected = mathEnforcer.subtractTen(num);
            expect(expected).to.equal(undefined);
        });

        it('should return "undefined" if we pass a number as string', function () {
            let num = '13';
            let expected = mathEnforcer.subtractTen(num);
            expect(expected).to.equal(undefined);
        });

        it('should return "10 subtracted from number" if we pass a valid number', function () {
            let num = 1;
            let expected = mathEnforcer.subtractTen(num);
            expect(expected).to.equal(num - 10);
        });

        it('should return "10 subtracted from number" if we pass a valid number', function () {
            let num = -1.2;
            let expected = mathEnforcer.subtractTen(num);
            expect(expected).to.equal(num - 10);
        });

        it('should return "correct answer" if we pass a floating point number within 0.01', function () {
            let num = 1.234;
            let expected = mathEnforcer.subtractTen(num);
            expect(expected).to.be.closeTo(num - 10, 0.01);
        });
    });

    describe('sum', function () {
        it('should return "undefined" if we pass a non-number parameter', function () {
            let first = '5';
            let second = 5;
            let expected = mathEnforcer.sum(first, second);
            expect(expected).to.equal(undefined);
        });

        it('should return "undefined" if we pass a non-number parameter', function () {
            let first = 5;
            let second = '1';
            let expected = mathEnforcer.sum(first, second);
            expect(expected).to.equal(undefined);
        });

        it('should return "undefined" if we pass a non-number parameter', function () {
            let first = '5';
            let second = '24';
            let expected = mathEnforcer.sum(first, second);
            expect(expected).to.equal(undefined);
        });

        it('should return "correct answer" if we pass one negative number', function () {
            let first = -5;
            let second = 5;
            let expected = mathEnforcer.sum(first, second);
            expect(expected).to.equal(first + second);
        });

        it('should return "correct answer" if we pass a floating point number within 0.01', function () {
            let first = 5;
            let second = -5.346;
            let expected = mathEnforcer.sum(first, second);
            expect(expected).to.be.closeTo(first + second, 0.01);
        });

        it('should return "correct answer" if we pass a floating point number within 0.01', function () {
            let first = 5.2345;
            let second = -5.346;
            let expected = mathEnforcer.sum(first, second);
            expect(expected).to.be.closeTo(first + second, 0.01);
        });
    })
});