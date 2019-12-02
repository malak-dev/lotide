const eqArrays = function (arr1, arr2) {
  let i = arr1.length;
  if (i !== arr2.length) return false;
  else {
    while (i--) {
      if (arr1[i] !== arr2[i]) return false;
    }
  } return true;
};
const assertArraysEqual = function (arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log("Assertion Passed:" + arrayA + " === " + arrayB);
  } else {
    console.log("Assertion Failed:" + arrayA + " !== " + arrayB);
  }
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const word = ['g', 'c', 't', 'm', 't'];
const word1 = ['c', 't', 'l'];
console.log(assertArraysEqual(results1, word));
console.log(assertArraysEqual(results1, words));
console.log(assertArraysEqual(results1, word1));