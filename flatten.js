const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arrOfArrays) {
  
  let newArr = [];

  for (let i = 0; i < arrOfArrays.length; i++) {
    
    if (Array.isArray(arrOfArrays[i])) {
    
      for (let j = 0; j < arrOfArrays[i].length; j++) {

        newArr.push(arrOfArrays[i][j]);
      }

    } else {
      newArr.push(arrOfArrays[i]);
    }
  }
  console.log(newArr);
};

module.exports = flatten;

// flatten([1, 2, [3, 4], 5, [6]]);