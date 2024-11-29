// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4); // 1 + 3 = 4
  });

  it('should round the first number up correctly', () => {
    assert.strictEqual(calculateNumber(1.7, 3), 5); // 2 + 3 = 5
  });

  it('should round the second number up correctly', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5); // 1 + 4 = 5
  });

  it('should round both numbers correctly and sum', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5); // 1 + 4 = 5
  });

  it('should handle .5 rounding upwards for both numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6); // 2 + 4 = 6
  });

  it('should work with negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5); // -1 + -4 = -5
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0); // 0 + 0 = 0
  });
});