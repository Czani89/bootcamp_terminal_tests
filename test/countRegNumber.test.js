let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('The countRegNumber function', function () {
    it('should retun the number of registrations entries', function () {
        assert.equal(6, countRegNumber('CA 182736,CY 523519. CA 42665, AA 12 RT GP, CA 182736,CY 523519,CJ 812328'));
    });
    it('should retun the number of registrations entries', function () {
        assert.equal(2, countRegNumber('CA 182736,CY 523519'));
    });
    it('should retun the number of registrations entries', function () {
     
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
});