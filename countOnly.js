const assertEqual = function (actual, expected) {
  //console.log(actual)
  if (actual === expected) {
    return `✅✅✅assertion passed: ${actual} === ${expected}`;

  } else {
    return `❌❌❌assertion failed: ${actual} !=== ${expected}`;
  }

};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {

  const results = {};

  for (const eachItem of allItems) {
    if (itemsToCount[eachItem]) {


      if (results[eachItem]) {

        results[eachItem] += 1;
      } else {
        results[eachItem] = 1;
      }
    }
  }
  return results
}

const arrayListToCheck = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const objectListToRemove = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
}

const result = countOnly(arrayListToCheck, objectListToRemove)
console.log(result)
console.log(assertEqual(result["Jason"], 1));

