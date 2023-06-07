const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// const countries = ["China", "Australia", "Slovenia", "Mozambique"];
// const consonants = ["C", "A", "S", "M"];

// const results2 = map(countries, country => country[0]);

// const lengths = [5, 9, 8, 10];
// const results3 = map(countries, country => country.length);

// assertArraysEqual(results2, consonants);
// assertArraysEqual(results3, lengths);
// assertArraysEqual(words, results2);

