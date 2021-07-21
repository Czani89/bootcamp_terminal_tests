let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function () {

    it('should return false for CF registration number', function () {
        assert.equal(false, isFromBellville('CF'));
    });
    it('should return true for CY registration number', function () {

        assert.equal(true, isFromBellville('CY'));
    });
});