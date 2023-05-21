const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {
  let result = {};
  let string = sentence.split(" ").join("");

  for (let letter of string) { 

    if (result[letter]){
      result[letter] += 1;
    } else if (result[letter] === " ") {
      result[letter] = 0;
    } else {
      result[letter] = 1;
    } 

  } console.log(result);
}

countLetters("lighthouse in the house");