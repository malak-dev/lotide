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
  const results = {};
  for (let count of str2) {
    if (results[count]) {
      results[count] += 1;
    } else {
      results[count] = 1;

    } var m = results; console.log(m);
  }
  for (let i = 0; i < m.length; i++) {
    console.log(m[i]);
  };

};
console.log(letterPositions("lighthouse in the house"));
//sassertArraysEqual(letterPositions("lighthouse in the house"), [1]);
//assertArraysEqual(["1", "2", "3"], ["B", "2", "3"]);
