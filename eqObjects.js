const eqArrays = require('./eqArrays');

const assertEqual = require('./assertEqual');

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

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// //console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// //eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

module.exports = eqObjects;