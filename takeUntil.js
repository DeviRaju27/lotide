
const assertArraysEqual = require('./assertArraysEqual');
const takeUntil = function(array, callback) {

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i);
    }
  }
  return array;
};
// Test code
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results = takeUntil(data1, x => x < 0);
// console.log(results);
// assertArraysEqual(results, [1, 2, 5, 7, 2])

