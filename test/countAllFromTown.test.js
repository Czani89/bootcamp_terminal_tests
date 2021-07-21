let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function () {

    it('should count 3 registrations from stellenbosch', function () {
        assert.equal(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341','CL'), "3");
    });
    it('should count 1 registrations from Kuilsriver', function () {
        // this test will fail - can you fix it?
        assert.equal(1, countAllFromTown('CJ 124, CY 567, CL 345, CF 456, CL 341','CF'));
    });
    it('should count 2 registrations from Bellville', function () {
        // this test will fail - can you fix it?
        assert.equal(2, countAllFromTown('CY 124, CY 567, CL 345, CF 456, CL 341', 'CY'));
    });
});