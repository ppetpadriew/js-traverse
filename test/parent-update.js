var test = require('tape');
var traverse = require('../');
var deepEqual = require('./lib/deep_equal');

test('updating parent node with null value during map', function (t) {
    var obj = {
        name: {
            en: null,
            th: null,
            zh: null
        },
        price: 100
    };
    var expectedResult = {
        name: null,
        price: 100
    };
    var result = traverse(obj).map(function (item) {
        if(this.key === 'en'){
            this.parent.update(item);
        }
    });
    t.ok(deepEqual(expectedResult, result));
    t.end();
});
