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

const assertArraysEqual = function (arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅assertion passed: ${arr1} === ${arr2}`);

  } else {
    console.log(`❌❌❌assertion failed: ${arr1} !=== ${arr2}`);
  }

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function (array, callback) {

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i)
    }
  }
  return array;
}


const results = takeUntil(data1, x => x < 0);
console.log(results);
assertArraysEqual(results, [1, 2, 5, 7, 2])

