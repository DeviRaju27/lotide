const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  for (const eachKey in obj) {
    if (obj[eachKey] === value) {
      return eachKey;
    }
  }
};

//Test code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "drama");