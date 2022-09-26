//const assertEqual = require ('../assertEqual')
const chai = require ('chai');
const assert = chai.assert;
const tail = require ('../tail')



describe('Tail tests', () => {

  it('returns the rest of array with 2 elements', () => {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected)
  })
})








