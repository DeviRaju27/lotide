const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅assertion passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌assertion failed: ${actual} !=== ${expected}`);
  }

};

let tail = function(arr) {
  let last = arr.slice(1);
  return last;
};
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
