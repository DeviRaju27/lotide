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
const assertArrayEqual = function (arr1, arr2) {

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅assertion passed: ${arr1} === ${arr2}`);

  } else {
    console.log(`❌❌❌assertion failed: ${arr1} !=== ${arr2}`);
  }
};
const without = function (source, itemsToRemove) {
  let modifiedSource = [];
  modifiedSource = modifiedSource.concat(source)
  console.log(modifiedSource)
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (modifiedSource[i] === itemsToRemove[j]) {
        modifiedSource.splice(i, 1)
      }
    }
  }
  return modifiedSource
}
without([1, 2, 3], [1]) // => [2, 3]
assertArrayEqual(without([1, 2, 3], [1]), [2, 3])

