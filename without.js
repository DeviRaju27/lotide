const eqArrays = function (array1, array2) {
  let arr1 = JSON.stringify(array1);
  let arr2 = JSON.stringify(array2);
  if (arr1 === arr2) {
    return (true);
  } else {
    return (false);
  }
}
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

