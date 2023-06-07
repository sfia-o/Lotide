const eqArrays = require('../eqArrays');
const assertArraysEqual = require ('../assertArraysEqual');

const assert = require('chai').assert;
const middle = require ('../middle');

describe('#middle', () => {

  it('returns the middle element when passed an odd array', () => {
    assert.deepEqual(middle([1,2,3]), [2])
  });

  it('returns the two middle elements when passed an even array', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3])
  });

  it('returns an empty array when passed a single element array', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns an empty array when passed an empty array', () => {
    assert.deepEqual(middle([]), []);
  });


});

// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 3, 4]));