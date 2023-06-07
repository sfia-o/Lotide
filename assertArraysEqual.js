const eqArrays = function(arr1, arr2){

  if (arr1.length !== arr2.length){
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
   } 
   return true;
  };

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4)){
    console.log(`✅ Assertion Passed: ${arr3}  ===  ${arr4}`); 
  } 

  if (!eqArrays(arr3,arr4)) {
    console.log(`🛑Assertion Failed: ${arr3} !== ${arr4}`);
  }
};

module.exports = assertArraysEqual;

