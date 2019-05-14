let Warehouse = require('./Warehouse');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Warehouse', function () {
    describe('Constructor', function () {
        let test = new Warehouse(50);
        it('should PASSED', function () {
            expect(() => {new Warehouse(50)}).to.not.throw('Invalid given warehouse space');
        });
        it('should throw ERR --> \'Invalid given warehouse space\'', function () {
            expect(() => {new Warehouse(0)}).to.throw('Invalid given warehouse space');
        });
        it('should throw ERR --> \'Invalid given warehouse space\'', function () {
            expect(() => {new Warehouse(-20)}).to.throw('Invalid given warehouse space');
        });
        it('should throw ERR --> \'Invalid given warehouse space\'', function () {
            expect(() => {new Warehouse('Pesho')}).to.throw('Invalid given warehouse space');
        });
    });
    describe('Add Product', function () {
        let test;
        beforeEach(() => {
            test = new Warehouse(50);
        });
        it('should throw ERR --> \'There is not enough space or the warehouse is already full\'', function () {
            expect(() => {test.addProduct('Food', 'Apple', 51);}).to.throw('There is not enough space or the warehouse is already full');
        });
        it('should PASSED', function () {
            test.addProduct('Food', 'Apple', 10);
            test.addProduct('Food', 'Apple', 12);
            assert.equal(test.availableProducts.Food['Apple'], 22);
        });
        it('should PASSED', function () {
            test.addProduct('Drink', 'Coca-Cola', 20);
            assert.equal(test.availableProducts.Drink.hasOwnProperty('Coca-Cola'), true)
        });
        it('should throw ERR', function () {
            expect(() => {test.addProduct('Pesho', 'Apple', 4)}).to.throw(Error);
        });
        it('should PASSED', function () {
            assert.equal(JSON.stringify(test.addProduct('Food', 'Apple', 3)), '{"Apple":3}');
        });
        it('should PASSED', function () {
            test.addProduct('Food', 'Banana', 4);
            assert.equal(JSON.stringify(test.addProduct('Food', 'Apple', 3)), '{"Banana":4,"Apple":3}');
        });
        it('should throw ERR --> \'There is not enough space or the warehouse is already full\'', function () {
            test.addProduct('Food', 'Apple', 49);
            expect(() => {test.addProduct('Food', 'Apple', 10)}).to.throw('There is not enough space or the warehouse is already full');
        });
    });
    describe('Scrape Product', function () {
        let test;
        beforeEach(() => {
            test = new Warehouse(50);
        });
        it('should throw ERR --> \'Salam do not exists\'', function () {
            test.addProduct('Food', 'Apple', 4);
            test.addProduct('Drink', 'Coca-Cola', 10);
            test.addProduct('Food', 'Pie', 6);
            expect(() => test.scrapeAProduct('Salam' ,3)).to.throw(`Salam do not exists`);
        });
        it('should PASSED', function () {
            test.addProduct('Food', 'Apple', 4);
            test.addProduct('Drink', 'Coca-Cola', 10);
            test.addProduct('Food', 'Pie', 6);
            test.scrapeAProduct('Apple', 2);
            assert.equal(test.availableProducts.Food['Apple'], 2);
        });
        it('should PASSED', function () {
            test.addProduct('Food', 'Apple', 4);
            test.addProduct('Drink', 'Coca-Cola', 10);
            test.addProduct('Food', 'Pie', 6);
            test.scrapeAProduct('Apple', 10);
            assert.equal(test.availableProducts.Food['Apple'], 0);
        });
    });
    describe('Revision', function () {
        let test;
        beforeEach(() => {
            test = new Warehouse(50);
        });
        it('should return \'The warehouse is empty\'', function () {
            assert.equal(test.revision(), 'The warehouse is empty');
        });
        it('should PASSED', function () {
            test.addProduct('Food', 'Apple', 4);
            test.addProduct('Drink', 'Coca-Cola', 10);
            test.addProduct('Food', 'Pie', 6);
            test.scrapeAProduct('Apple', 10);
            assert.equal(test.revision(), 'Product type - [Food]\n- Apple 0\n- Pie 6\nProduct type - [Drink]\n- Coca-Cola 10');
        });
    });
    describe('Order Products', function () {
        let test;
        beforeEach(() => {
            test = new Warehouse(50);
        });
        it('should throw ERR', function () {
            test.addProduct('Food', 'Apple', 4);
            test.addProduct('Drink', 'Coca-Cola', 10);
            test.addProduct('Food', 'Pie', 6);
            expect(() => {test.orderProducts('Pesho')}).to.throw(Error)
        });
        it('should PASSED', function () {
            test.addProduct('Food', 'Pie', 4);
            test.addProduct('Drink', 'Coca-Cola', 10);
            test.addProduct('Food', 'Apple', 6);
            test.addProduct('Drink', 'Alcohol', 15);
            test.orderProducts('Food');
            test.orderProducts('Drink');
            assert.equal(test.revision(), 'Product type - [Food]\n- Apple 6\n- Pie 4\nProduct type - [Drink]\n- Alcohol 15\n- Coca-Cola 10')
        });
        it('should PASSED', function () {
            assert.equal(JSON.stringify(test.orderProducts('Food')), '{}')
        });
        it('should throw ERR', function () {
            expect(() => {test.orderProducts('Pesho')}).to.throw(Error);
        });
    });
    describe('Occupied Capacity', function () {
        let test;
        beforeEach(() => {
            test = new Warehouse(50);
        });
        it('should PASSED', function () {
            assert.equal(test.occupiedCapacity(), 0);
        });
        it('should PASSED', function () {
            test.addProduct('Food', 'Pie', 4);
            test.addProduct('Drink', 'Coca-Cola', 10);
            test.addProduct('Food', 'Apple', 6);
            test.addProduct('Drink', 'Alcohol', 15);
            assert.equal(test.occupiedCapacity(), 35);
        });
    });
});