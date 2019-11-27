const eqArrays = function (arr1, arr2) {
  let i = arr1.length;
  if (i !== arr2.length) return false;
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

const middle = function (arr) {
  var mArray = [];
  if (arr.length === 1 || arr.length === 2) {
    return mArray;
  } else {
    if (arr.length % 2 === 0) {
      var theMiddle = Math.floor(arr.length / 2); // index 2
      mArray.push(arr[theMiddle])
      mArray.push(arr[theMiddle + 1]);
      return mArray;
    }
    else {
      var theMiddle = Math.floor(arr.length / 2); // index 2
      mArray.push(arr[theMiddle])
      return mArray;
    }
  }

};


console.log(middle([1]));// => []

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

assertArraysEqual([1, 2, 3], [1, 2, 6]);
assertArraysEqual(["1", "2", "3"], ["B", "2", "3"]);

