let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function () {
    it('sshould return the right price based on the shift you are working', function () {
        assert.equal("free", transportFee('nightshift'));
    });
    it('should return the right price based on the shift you are working', function () {
        assert.equal('R10', transportFee('afternoon'));
    });
    it('sshould return the right price based on the shift you are working', function () {
        assert.equal("R20", transportFee('morning'));
    });
});