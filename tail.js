// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual}  ===  ${expected}`);
//   } else {
//     console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const assertEqual = require(`./assertEqual`);

const tail = function(array) {
  result = array.slice(1)
  return result;
}

module.exports = tail;

tail([5, 6, 8, 99]);
tail(["hey", "hello", "and goodmorning!"]);
tail([1]);
tail([]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);