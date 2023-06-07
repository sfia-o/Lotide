const assert = require('chai').assert;
const assertArraysEqual = require ('../assertArraysEqual');

describe('#assertArraysEqual', () => {

  it('returns [1,2,3] is equal to [1,2,3]', () => {
    assert.deepEqual(assertArraysEqual([1,2,3], [1,2,3]), true);
  });
})

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [4, 5, 6]);