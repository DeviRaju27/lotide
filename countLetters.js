const assertEqual = require('./assertEqual');

const countLetters = function(word) {
  let result = {};
  for (const letter of word) {
    if (letter !== ' ') {
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else {
        result[letter]++;
      }
    }
  }
  return result;
};
// Test code
//console.log(countLetters("LHL"))
