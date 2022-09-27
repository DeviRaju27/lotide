const assertArraysEqual = require('./assertArraysEqual');
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  return results;
};

//Test Code
// assertArraysEqual(letterPositions("hello").l, [2, 3]);
// console.log(letterPositions("hello"))