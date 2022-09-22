const assertEqual = function (actual, expected) {

  if (actual === expected) {
    //console.log();
    return "✅✅✅aassertion passed:" + actual + "!===" + expected;

  } else {
    //console.log();
    return "❌❌❌assertion failed:" + actual + "!===" + expected;
  }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const eqObjects = function (object1, object2) {
  obj1Keys = Object.keys(object1)
  obj2Keys = Object.keys(object2)

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let eachKeyObj1 of obj1Keys) {
    let value1 = object1[eachKeyObj1];
    let value2 = object2[eachKeyObj1];

    if (!assertEqual(value1, value2)) {
      return false;
    } else if (typeof value1 !== typeof value2) {
      return false;
    }

  }
  return true;
}




eqObjects(ab, ba);