const eqArrays = function (array1, array2) {


  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {

        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2) {

  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅assertion passed: ${arr1} === ${arr2}` );

  } else {
    console.log(`❌❌❌assertion failed: ${arr1} !=== ${arr2}` );
  }

};

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
    results[sentence[i]].push(i)
    } else {
    results[sentence[i]] = [];
    results[sentence[i]].push(i)
    }
  }
  return results;
}
assertArraysEqual(letterPositions("hello").l, [2, 3]);
console.log(letterPositions("hello"))