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

const without = function(source, itemsToRemove) {

  let filtered = [];

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      filtered.push(source[i]);
      
    }
  } console.log(filtered);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]);
without(["hi", "hello", "23"],["hi", "hello", 23]);
without([4, "4", 5], ["4", 4 , 5]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);