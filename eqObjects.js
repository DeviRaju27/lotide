const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let eachKeyObj1 of obj1Keys) {
    let value1 = object1[eachKeyObj1];
    let value2 = object2[eachKeyObj1];

    if (!eqArrays(value1, value2)) {
      return false;
    } else if (typeof value1 !== typeof value2) {
      return false;
    }
  }
  return true;
};

//Test code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba);