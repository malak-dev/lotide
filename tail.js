const assertEqual = function(actual, expected) {

  let i = actual.length;
  if (i !== expected.length) return false;
  while (i--) {
    if (actual[i] !== expected[i]) console.log("false");
  } console.log("true");
};
let m = [" "];
const tail = function(arr) {
  m = arr.slice(1);
  return m;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
