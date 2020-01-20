var assert = require('assert');
var calculator = require('../../util/calculator')

describe('calculator', () => {
    it('should calculate an average', function() {
      var average = calculator.average([1,3,1,3]);
      assert.equal(average, 2);
    });
});