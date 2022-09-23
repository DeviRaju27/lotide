const eqArrays = function (array1, array2) {
  let arr1 = JSON.stringify(array1);
  let arr2 = JSON.stringify(array2);
  if (arr1 === arr2) {
    return (true);
  } else {
    return (false);
  }
}

const assertArraysEqual = function (arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅assertion passed: ${arr1} === ${arr2}`);

  } else {
    console.log(`❌❌❌assertion failed: ${arr1} !=== ${arr2}`);
  }

};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"])