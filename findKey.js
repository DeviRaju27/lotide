const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅assertion passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌assertion failed: ${actual} !=== ${expected}`);
  }

};

const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}
const objectIs = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}
const result = findKey(objectIs, x => x.stars === 2)
console.log(result)

assertEqual(result, 'noma')
