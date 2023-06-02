const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

  /*

  Refactored example:

  if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }

  console.log(`Assertion Passed: ${actual} === ${expected})

  */

};

assertEqual("Boot", "Bootcamp");
assertEqual(1, 7);

