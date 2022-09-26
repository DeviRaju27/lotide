const eqArrays = require ('./eqArrays')

const assertArraysEqual = function(arr1,arr2) {

  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅assertion passed: ${arr1} === ${arr2}` );

  } else {
    console.log(`❌❌❌assertion failed: ${arr1} !=== ${arr2}` );
  }

};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

