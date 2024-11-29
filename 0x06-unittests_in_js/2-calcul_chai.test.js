// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6); // 1 + 5 = 6
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5); // 1 + 4 = 5
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4); // 1 - 5 = -4
      expect(calculateNumber('SUBTRACT', 5.6, 2.2)).to.equal(4); // 6 - 2 = 4
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2); // 1 / 5 = 0.2
      expect(calculateNumber('DIVIDE', 7.8, 2.5)).to.be.closeTo(2.6667, 0.0001); // 8 / 3 ≈ 2.67
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error'); // 1 / 0 = 'Error'
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error'); // 0 / 0 = 'Error'
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw(Error, 'Invalid type');
    });
  });
});
