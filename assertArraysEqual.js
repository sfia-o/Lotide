const eqArrays = require('./eqArrays')

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4)){
    console.log(`✅ Assertion Passed: ${arr3}  ===  ${arr4}`); 
  } 

  if (!eqArrays(arr3,arr4)) {
    console.log(`🛑Assertion Failed: ${arr3} !== ${arr4}`);
  }
};

module.exports = assertArraysEqual;

