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
const flatten = function (array) {
  var resArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      for (let index = 0; index < element.length; index++) {
        const sub_element = element[index];
        resArray.push(sub_element);
      }
    }
    else {
      resArray.push(element);
    }
  }
  return resArray;
};



console.log(flatten([1, 2, [3, 4], 5, [6]]));