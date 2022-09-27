const assertArraysEqual = require('./assertArraysEqual');
const without = function(source, itemsToRemove) {
  let modifiedSource = [];
  modifiedSource = modifiedSource.concat(source);
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (modifiedSource[i] === itemsToRemove[j]) {
        modifiedSource.splice(i, 1);
      }
    }
  }
  return modifiedSource;
};

//Test code
// without([1, 2, 3], [1]) // => [2, 3]
// assertArrayEqual(without([1, 2, 3], [1]), [2, 3])

