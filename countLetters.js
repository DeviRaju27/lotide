const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅assertion passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌assertion failed: ${actual} !=== ${expected}`);
  }

};

const countLetters = function (word) {
  let result = {}
  for (const letter of word) {
    if(letter !== ' '){
    if (result[letter] === undefined) {
      result[letter] = 1;
    }
    else {
      result[letter]++;
    }
  }
}
  return result;
}

console.log(countLetters("LHL"))
