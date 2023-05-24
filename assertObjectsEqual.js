
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

const eqObjects = function(object1, object2) {

  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
 
  
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const key of obj1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }

  } return true;

};

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tshirt = {size: "M", color: "red"};
const otherTshirt = {size: "M", color: "red"};
assertObjectsEqual(tshirt, otherTshirt)