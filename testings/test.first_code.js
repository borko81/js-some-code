const assert = require('assert');

describe('Array', () => {
    describe('#indexOf', () => {
        it('shoul return -1 when not found value', function() {
            assert.equal([1,2,3,4].indexOf(5), -1)
        });
        it ('should return position when found value', function() {
            assert.equal([1,2,3,4].indexOf(3), 2)
        });
    });
});