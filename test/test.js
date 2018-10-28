
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

  it('Should return 777', () => {
    function sum(a, b) {
      return a + b;
    }
    assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('Should return 20', () => {
    function sum(a, b) {
      return a + b;
    }
    assert.deepEqual(make(10)(1, 2, 3)(4)(sum), 20);
  });

  it('Should return 33', () => {
    function sum(a, b) {
      return a + b;
    }
    assert.deepEqual(make(5, 10, 10)(1, 2)(5)(sum), 33);
  });

  it('Should return 3', () => {
    function sum(a, b) {
      return a + b;
    }
    assert.deepEqual(make()(1, 2)()(sum), 3);
  });

  it('Should return -7', () => {
    function sum(a, b) {
      return a + b;
    }
    assert.deepEqual(make(10, -10)(1, -1)(-7)(sum), -7);
  });

})