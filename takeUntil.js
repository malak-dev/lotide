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

const takeUntil = function (array, callback) {
  // const result = array.filter(callback);
  let output = [];
  for (let arr of array) {
    if (!callback(arr)) {
      output.push(arr);
    } else { return output; }
  }

};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const test1 = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, test1));
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const test2 = ["I've", "been", "to", "Hollywood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, test2));
