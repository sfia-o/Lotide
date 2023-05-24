const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4)) {
    console.log(`✅ Assertion Passed: ${arr3}  ===  ${arr4}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr3} !== ${arr4}`);
  }
};

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);


const countries = ["China", "Australia", "Slovenia", "Mozambique"];
const consonants = ["C", "A", "S", "M"];

const results2 = map(countries, country => country[0]);

const lengths = [5, 9, 8, 10];
const results3 = map(countries, country => country.length);




assertArraysEqual(results2, consonants);
assertArraysEqual(results3, lengths);
assertArraysEqual(words, results2);

