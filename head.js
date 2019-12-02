
const head = function (arr) {
  if (arr.length < 1) {
    return undefined;
  } else {
    for (var i = 0; i < arr.length; i++) {
      return arr[0];
    }
  }
};
module.exports = head;
