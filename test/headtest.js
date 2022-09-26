//const assertEqual = require('../assertEqual')
const chai = require ('chai');
const assert = chai.assert;

const head = require('../head.js')

//assertEqual(head([5, 6, 7]), 6)

describe('head tests', () => {
  it('returns 1 for [1,2,3]', ()=> {
    const actual = head([1,2,3])
    const expected = 1;
    assert.strictEqual(actual, expected)
  });
  it('returns 5 for [5]', () => {
    const actual = head([5]);
    const expected = 5;
    assert.strictEqual(actual,expected)
  })
});
