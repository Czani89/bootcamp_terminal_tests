let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function () {
   
    it('should return true for Monday', function () {
        assert.equal(true, isWeekday('Monday'));
    });
    it('should return true for Tuesday', function () {
        assert.equal(true, isWeekday('Tuesday'));
    });
    it('should return false for Saturday', function () {
    
        assert.equal(false, isWeekday('Saturday'));
    });
});