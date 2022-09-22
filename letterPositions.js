const eqArrays = function (array1, array2) {
  let arr1 = JSON.stringify(array1);
  let arr2 = JSON.stringify(array2);
  if (arr1 === arr2) {
    return (true);
  } else {
    return (false);
  }
}

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