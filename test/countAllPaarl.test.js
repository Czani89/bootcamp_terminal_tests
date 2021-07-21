let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function () {
    it('should count 0 registrations  from Paarl', function () {
        assert.equal(0, countAllPaarl('CL 345 123, CL 2345, CL 123 - 546, CK 345, CL 123, CK 345 253,CL 555 253'));
    });

    it('should count 4 registrations  from Paarl', function () {
        assert.equal(4, countAllPaarl('CJ 345 123, CJ 2345, CL 123 - 546, CK 345, CJ 123, CK 345 253,CJ 555 253'));
    });
    it('should count 3 registrations  from Paarl', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123 - 546, CK 345, CJ 123'));
    });
});