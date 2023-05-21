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
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};

const letterPositions = function(sentence) {
  const results = {};

  
  let string = sentence.split(" ").join("");

  for (let char of string) {
    results[char] = [];

    for (let i = 0; i < string.length; i++) {
      if (char === string[i]) {
        results[char].push(i);
           
      }
    }
    
    
  }

  return results;
};

console.log(letterPositions("hello"));

