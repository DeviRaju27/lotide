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

const middle = function (array) {

  let midArray = []
  const midItemIndex = Math.floor(array.length / 2);

  if (array.length === 1 || array.length === 2) {
    return midArray;
  }
  if (array.length % 2 === 1) {
    midArray.push(array[midItemIndex])
    return midArray
  } else {
    midArray.push(array[midItemIndex - 1],array[midItemIndex])
    return midArray
  }




}

//middle([1, 2]) // => [2]
//middle([1, 2, 3, 4])

assertArraysEqual(middle([1,2,3,4]),[2,3])