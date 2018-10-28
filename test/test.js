
const assert = require('assert');
const sumOfOther = require('../sumOfOther.js');

describe('sumOfOther', () => {
  it('Should return [8, 7, 6, 9]', () => {
    assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
  });

  it('Should return []', () => {
    assert.deepEqual(sumOfOther([]), []);
  });

  it('Should return [22, 40, 18, 16]', () => {
    assert.deepEqual(sumOfOther([10, -8, 14, 16]), [22, 40, 18, 16]);
  });

  it('Should return [19, 14, 7, 23, 13]', () => {
    assert.deepEqual(sumOfOther([0, 5, 12, -4, 6]), [19, 14, 7, 23, 13]);
  });
})