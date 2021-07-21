let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe('The findItemsOver function', function () {
    it('should return all the products that have a quantity higher than 15', function () {
        assert.deepEqual(
            [{ name: 'apples', qty: 21 },
            { name: 'pears', qty: 19 },
            { name: 'bananas', qty: 17 },], findItemsOver([
            { name: 'apples', qty: 21 },
            { name: 'pears', qty: 19 },
            { name: 'bananas', qty: 17 },
            { name: 'apples', qty: 3 },
        ], 15));
    });
    it('should return all the products that have a quantity higher than 20', function () {
        assert.deepEqual([], findItemsOver([
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 19 },
            { name: 'bananas', qty: 17 },
            { name: 'apples', qty: 3 },
        ],20));
    });
    it('should return all the products that have a quantity higher than 25', function () {
        assert.deepEqual([
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
        ], findItemsOver([
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ],25));
    });
});