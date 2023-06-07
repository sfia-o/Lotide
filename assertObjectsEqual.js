const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`🛑Assertion Failed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  }
};

// const tshirt = {size: "M", color: "red"};
// const otherTshirt = {size: "M", color: "red"};
// assertObjectsEqual(tshirt, otherTshirt);

module.exports = assertObjectsEqual;