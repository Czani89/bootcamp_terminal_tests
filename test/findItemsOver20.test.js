let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe('The findItemsOver20 function', function () {
    it('should return all the products that have a quantity higher than 20', function () {
        assert.deepEqual([{ name: 'apples', qty: 21 }], findItemsOver20([
            { name: 'apples', qty: 21 },
            { name: 'pears', qty: 19 },
            { name: 'bananas', qty: 17 },
            { name: 'apples', qty: 3 },
        ]));
    });
    it('should return all the products that have a quantity higher than 20', function () {
        assert.deepEqual([], findItemsOver20([
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 19 },
            { name: 'bananas', qty: 17 },
            { name: 'apples', qty: 3 },
        ]));
    });
    it('should return all the products that have a quantity higher than 20', function () {
        // this test will fail - can you fix it?
        assert.deepEqual([
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
        ], findItemsOver20([
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ]));
    });
});