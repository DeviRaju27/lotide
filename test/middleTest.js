
const chai = require ('chai');
const assert = chai.assert;
const middle = require ('../middle')



describe('Middle tests', () => {

  it('returns [2,3]  when passed [1,2,3,4]', () => {
    const actual = middle([1,2,3,4])
    const expected = [2,3]
    assert.deepEqual(actual, expected)
  })
})

