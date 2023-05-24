const eqArrays = function(arr1, arr2){

  if (arr1.length !== arr2.length){
    return false;
  } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]){
        return false;
      }
     } 
     return true;
  } 
}  

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4)){
    console.log(`✅ Assertion Passed: ${arr3}  ===  ${arr4}`);
  } else {
    console.log(`🛑Assertion Failed: ${arr3} !== ${arr4}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [4, 5, 6]);