const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  let result = {};
  let string = sentence.split(" ").join("");

  for (let letter of string) {

    if (result[letter]) {
      result[letter] += 1;
    } 
    result[letter] = 1;
    }

   return result;
};

// console.log(countLetters("Lighthouse in the house")); 

module.exports = countLetters;