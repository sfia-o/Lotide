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

const middle = function(arr) {

  let mid = [];
  
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    mid.push(Math.floor(arr.length / 2));
    return [arr[mid[0]]];
    
  } else if (arr.length % 2 === 0) {
    mid.push(Math.floor(arr.length / 2) - 1);
    mid.push(Math.floor(arr.length / 2));
    return [arr[mid[0]], arr[mid[1]]];
    
  }

};


console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 3, 4]));