// 0-calcul.js

function calculateNumber(a, b) {
    // Round both numbers
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    // Return their sum
    return roundedA + roundedB;
  }
  
  module.exports = calculateNumber;  