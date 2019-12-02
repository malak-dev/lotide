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
  let results = {};
  let arr = [];
  for (let count of str2) {
    if (results[count]) {
      results[count] += 1;
    } else {
      results[count] = 1;
    } 
  } for (let i = 0; i < results.length; i++) {
    if (Object.results[i]) {
      arr = arr.push(i);
      console.log(arr);
    } return arr;
  }
};

console.log(letterPositions("lighthouse in the house"));
//sassertArraysEqual(letterPositions("lighthouse in the house"), [1]);
//assertArraysEqual(["1", "2", "3"], ["B", "2", "3"]);
