const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:" + actual + " === " + expected);
  } else {
    console.log("Assertion Failed:" + actual + " !== " + expected);
  }
};


const findKeyByValue = function (obj, val) {

  for (let mov in obj) {
    if (obj[mov] === val) {
      return mov;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
module.exports = indKeyByValue;
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);