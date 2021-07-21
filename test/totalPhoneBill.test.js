let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function () {
    it('should calculate the total bill for the data provided', function () {
        assert.equal('R1.30'    , totalPhoneBill('sms, sms'));
    });
    it('should calculate the total bill for the data provided', function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it('should calculate the total bill for the data provided', function () {
    
        assert.equal('R7.45', totalPhoneBill("call, sms, call, sms, sms"));
    });
});