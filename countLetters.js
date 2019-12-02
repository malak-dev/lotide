const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:" + actual + " === " + expected);
  } else {
    console.log("Assertion Failed:" + actual + " !== " + expected);
  }
};
const countLetters = function (str) {
  var str2 = str.split(' ').join('');
  const result = {};

  for (let count of str2) {
    if (result[count]) {
      result[count] += 1;
    } else {
      result[count] = 1;

    }
  }
  return result;

};
module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);