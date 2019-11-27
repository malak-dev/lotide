const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:" + actual + " === " + expected);
  } else {
    console.log("Assertion Failed:" + actual + " !== " + expected);
  }
};
const eqArrays = function (arr1, arr2) {
  let i = arr1.length;
  if (i !== arr2.length) return false;
  while (i--) {
    if (arr1[i] !== arr2[i]) return false;
  } return true;
};
const eqObjects = function (object1, object2) {
  var keysOfObj1 = Object.keys(object1);
  var keysOfObj2 = Object.keys(object2);

  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  } else {
    for (let key of keysOfObj1) {
      if (keysOfObj2[key] === keysOfObj2[0] || key === keysOfObj2[1]) {
        return true;
      } else { return false; }
    }


  }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc));
console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));
console.log(eqObjects(cd, cd2))


