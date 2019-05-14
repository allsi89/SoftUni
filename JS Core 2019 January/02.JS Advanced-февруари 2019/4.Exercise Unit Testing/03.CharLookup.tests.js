let lookupChar = require('./03.CharLookup');
let expect = require('chai').expect;

describe('Look up Char', function () {
    it('should return undefined if we pass number and string', function () {
        let str = 'ko staa';
        let int = 23;

        let expected = lookupChar(int,str);
        expect(expected).to.be.equal(undefined);
    });

    it('should return character if we pass string and index', function () {
        let str = 'ko staa';
        let int = 3;

        let expected = lookupChar(str,int);
        expect(expected).to.be.equal('s');
    });

    it('should return "Incorrect index" if we pass number that is out of the array', function () {
        let str = 'ko staa';
        let int = -2;

        let expected = lookupChar(str,int);
        expect(expected).to.be.equal('Incorrect index');
    });

    it('should return undefined if we pass string that and floating point number', function () {
        let str = 'ko staa';
        let num = 2.34;

        let expected = lookupChar(str,num);
        expect(expected).to.be.equal(undefined);
    });

    it('should return "Incorrect index" if we pass number that is out of the array', function () {
        let str = 'ko staa';
        let int = 23;

        let expected = lookupChar(str,int);
        expect(expected).to.be.equal('Incorrect index');
    });

    it('should return "Incorrect index" if we pass empty string', function () {
        let str = '';
        let int = 23;

        let expected = lookupChar(str,int);
        expect(expected).to.be.equal('Incorrect index');
    });

    it('should return undefined if we pass two numbers', function () {
        let firstNum = 13;
        let secondNum = 23;

        let expected = lookupChar(firstNum, secondNum);
        expect(expected).to.be.equal(undefined);
    });

    it('should return undefined if we pass two strings', function () {
        let firstStr = 'zdr';
        let secondStr = 'pesho';

        let expected = lookupChar(firstStr, secondStr);
        expect(expected).to.be.equal(undefined);
    });
});