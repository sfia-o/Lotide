const assertEqual = require('./assertEqual')

const findKeyByValue = function(object, value) {

  // we're iterating through an object
  for (const key in object) {
  
    // through this iteration we want to find the key that stores a string that is equal to our input value
    if (object[key] === value) {
      return key;
    }
  
  }
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// module.exports = findKeyByValue; 

// console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);