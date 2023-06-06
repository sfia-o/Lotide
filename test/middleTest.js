const eqArrays = require('../eqArrays');
const assertArraysEqual = require ('../assertArraysEqual');
const middle = require ('../middle');


console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 3, 4]));