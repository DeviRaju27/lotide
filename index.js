const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head   = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  countLetters,
  countOnly,
  letterPositions,
  findKey,
  findKeyByValue,
  map,
  takeUntil,
  without
};