const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed:"+ actual + " === " + expected);
  } else {
    console.log("Assertion Failed:" +actual + " !== " +expected);
  }
};

const head = function(arr){
  if (arr.length < 1) {
    return undefined;
  } else {
    for(var i=0 ; i < arr.length ; i++){
      return arr[0];
    }
  }
};
assertEqual(head([5,6,7]), 5);
assertEqual(head([]), "test-case");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
