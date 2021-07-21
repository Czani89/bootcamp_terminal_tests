let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function () {

    it('should return 32 years aogo', function () {
        assert.equal(32, yearsAgo(1989));
    });
    it('should return 28 years ago', function () {
     
        assert.equal(28, yearsAgo(1993));
    });
});