// const eqArrays = function (arr1, arr2) {
//   let i = arr1.length;
//   if (i !== arr2.length) return false;
//   while (i--) {
//     if (arr1[i] !== arr2[i]) return false;
//   } return true;
// };
const eqArrays = require('./eqArrays');
const assertArraysEqual = function (arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log("Assertion Passed:" + arrayA + " === " + arrayB);
  } else {
    console.log("Assertion Failed:" + arrayA + " !== " + arrayB);
  }
}
module.exports = assertArraysEqual;

