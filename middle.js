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