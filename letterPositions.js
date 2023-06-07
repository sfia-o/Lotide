const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};

  
  let string = sentence.split(" ").join("");

  for (let char of string) {
    results[char] = [];

    for (let i = 0; i < string.length; i++) {
      if (char === string[i]) {
        results[char].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("hello"));
// console.log(letterPositions("Lighthouse Labs"));

