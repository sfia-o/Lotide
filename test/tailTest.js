const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [6, 8, 99] when passed [5, 6, 8, 99]', () => {
    assert.deepEqual(tail([5, 6, 8, 99]), [6, 8, 99]);
  });

  it('returns ["hello", "and goodmorning!"] when passed ["hey", "hello", "and goodmorning!]', () => {
    assert.deepEqual(tail(['hey', 'hello', 'and goodmorning!']), ['hello', 'and goodmorning!']);
  });

  it('returns an empty array when passed an array with only one element', () => {
    assert.deepEqual(tail(['hey']), []);
  });

  it('returns an empty array when passed an empty array', () => {
    assert.deepEqual(tail([]), []);
  });

});

// tail([5, 6, 8, 99]);
// tail(["hey", "hello", "and goodmorning!"]);
// tail([1]);
// tail([]);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); 
// assertEqual(words.length, 3);