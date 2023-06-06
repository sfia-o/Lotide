const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const middle = function(arr) {

  let mid = [];
  
  if (arr.length <= 2) {
    return [];
  } 
  
  if (arr.length % 2 === 1) {
    mid.push(Math.floor(arr.length / 2));
    return [arr[mid[0]]];
    
  } 
  
  if (arr.length % 2 === 0) {
    mid.push(Math.floor(arr.length / 2) - 1);
    mid.push(Math.floor(arr.length / 2));
    return [arr[mid[0]], arr[mid[1]]];
    
  }

};

module.exports = middle;