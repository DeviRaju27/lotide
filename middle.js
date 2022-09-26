
const middle = function (array) {
  let midArray = []
  const midItemIndex = Math.floor(array.length / 2);

  if (array.length === 1 || array.length === 2) {
    return array;
  }
  if (array.length % 2 === 1) {
    midArray.push(array[midItemIndex])
    return midArray
  } else {
    midArray.push(array[midItemIndex - 1],array[midItemIndex])
    return midArray
  }
}




module.exports = middle;