

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
module.exports = middle;





