const assertEqual = function (actual, expected) {



  if (actual === expected) {
    console.log(`✅✅✅assertion passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌assertion failed: ${actual} !=== ${expected}`);
  }


};

const head = function firstElement(arr) {
  let first = arr[0];
  return first;
}

assertEqual(head([5, 6, 7]), 6);

