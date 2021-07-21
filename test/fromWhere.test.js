let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function () {
    it('should take a car registration number and returns the town the car is from', function () {
        assert.equal('Some other place!', fromWhere('CC'));
    });
    it('should take a car registration number and returns the town the car is from', function () {
        assert.equal('Cape Town', fromWhere('CA'));
    });
    it('should take a car registration number and returns the town the car is from', function () {
        assert.equal('Paarl', fromWhere('CJ'));
    });
    it('should take a car registration number and returns the town the car is from', function () {
      
        assert.equal('Bellville', fromWhere('CY'));
    });
});