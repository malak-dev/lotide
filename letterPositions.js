const assertArraysEqual = function (arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log("Assertion Passed:" + arrayA + " === " + arrayB);
  } else {
    console.log("Assertion Failed:" + arrayA + " !== " + arrayB);
  }
};


const eqArrays = function (arr1, arr2) {
  let i = arr1.length;
  if (i !== arr2.length) return false;
  while (i--) {
    if (arr1[i] !== arr2[i]) return false;
  } return true;
};

const letterPositions = function (sentence) {
  var str2 = sentence.split(' ').join('');
  console.log(str2);
  let results = {};
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in results) {
      results[str2[i]].push(i);
    } else { results[str2[i]] = [i]; }
  } return results;
};
module.exports = letterPositions;
console.log(letterPositions("lighthouse in the house"));
//sassertArraysEqual(letterPositions("lighthouse in the house"), [1]);
//assertArraysEqual(["1", "2", "3"], ["B", "2", "3"]);
