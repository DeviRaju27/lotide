const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return `✅✅✅assertion passed: ${actual} === ${expected}`;

  } else {
    return `❌❌❌assertion failed: ${actual} !=== ${expected}`;
  }

};




module.exports = assertEqual;