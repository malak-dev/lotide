const eqArrays = function (arr1, arr2) {
  let i = arr1.length;
  while (i--) {
    if (arr1[i] !== arr2[i]) return false;
  } return true;
};
const assertArraysEqual = function (arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log("Assertion Passed:" + arrayA + " === " + arrayB);
  } else {
    console.log("Assertion Failed:" + arrayA + " !== " + arrayB);
  }

};
const without = function (src, itemToR) {
  const result = src.filter(word => !itemToR.includes(word));
  console.log(result);
};

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);