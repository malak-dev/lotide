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
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log("Assertion Passed:" + `${inspect(actual)}` + " === " + `${inspect(expected)}`);
  } else {
    console.log("Assertion Failed:" + `${inspect(actual)}` + " !== " + `${inspect(expected)}`);
  }

};
assertObjectsEqual({ a: '1', b: '2' }, { b: '2', a: '1' });
assertObjectsEqual({ a: '1', b: '2' }, { a: '2', b: '1', c: '3' });
assertObjectsEqual({ a: '1', b: '2' }, { a: '2', b: '1' });
