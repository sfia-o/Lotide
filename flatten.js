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

flatten([1, 2, [3, 4], 5, [6]]);