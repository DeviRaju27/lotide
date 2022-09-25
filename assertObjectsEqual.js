const eqArrays = function(array1, array2) {


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

const ab = { a: '1', b: 2 };
const ba = { b: 2, a: '' };

const eqObjects = function(object1, object2) {

  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
        }
      } else if (typeof (object1[key]) === "object" || typeof (object2[key]) === "object") {

        if (!eqArrays(object1[key], object2[key])) {
          return `❌❌❌assertion failed: ${JSON.stringify(object1)} !== ${JSON.stringify(object2)}` ;
        }
      } else if (object1[key] !== object2[key]) {
        return `❌❌❌assertion failed: ${JSON.stringify(object1)} !== ${JSON.stringify(object2)}` ;
      }
    }
  }
  return  `✅✅✅assertion passed: ${JSON.stringify(object1)} === ${JSON.stringify(object2)}`;
  ;
};




console.log(eqObjects(ab, ba));