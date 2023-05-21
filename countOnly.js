const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {

  //create new object to return results in
  const results = {};
  
  //iterate through allitems array
  for (const item of allItems) {

    //if the item of the array is present in the object
    if (itemsToCount[item]) {
  
      //if it is also present in the new object results then add +1 to count
      if (results[item]) {
        results[item] += 1;

        //if not yet present there than make it just 1
      } else {
        results[item] = 1;
      }
    }
  
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
