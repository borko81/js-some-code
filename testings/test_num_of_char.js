const assert = require('assert');

describe('Basic mocha string test', function (){
    it('should return number of character in a string', function() {
        assert.equal('Hello'.length, 5);
    });
    it('should return first char of word', function() {
        assert.equal('Borko'.charAt(0), 'B');
    })
});