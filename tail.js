const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual("Boot", "Bootcamp");
assertEqual(1, 7);

const tail = function(array) {
  result = array.slice(1)
  console.log(result);
}

tail([5, 6, 8, 99]);
tail(["hey", "hello", "and goodmorning!"]);
tail([1]);
tail([]);

