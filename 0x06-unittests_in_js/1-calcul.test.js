// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6); // 1 + 5 = 6
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5); // 1 + 4 = 5
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4); // 1 - 5 = -4
      assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 2.2), 4); // 6 - 2 = 4
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2); // 1 / 5 = 0.2
      assert.strictEqual(calculateNumber('DIVIDE', 7.8, 2.5), 2.6666666666666665); // 8 / 2 = 4
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error'); // 1 / 0 = 'Error'
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error'); // 0 / 0 = 'Error'
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), {
        name: 'Error',
        message: 'Invalid type',
      });
    });
  });
});
