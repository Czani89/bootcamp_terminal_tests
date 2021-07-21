let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function () {
    it('should return for number plates not from "GP"', function () {

        assert.equal(false, regCheck('YOU 555 MP', "GP"));
    });
    it('should return true for EC number plates', function () {
        assert.equal(true, regCheck('BYZ 123 EC', "EC"));
    });
    it('should return true for GP number plates', function () {

        assert.equal(true, regCheck('DC 55 YU GP', "GP"));
    });
});