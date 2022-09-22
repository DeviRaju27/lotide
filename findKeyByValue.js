const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅assertion passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌assertion failed: ${actual} !=== ${expected}`);
  }

};

const findKeyByValue = function (obj, value) {
  let keysAre = {}
  const keyList = Object.keys(obj)
  for (const eachKey of keyList) {
    if (obj[eachKey] === value) {
      return eachKey
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "drama");