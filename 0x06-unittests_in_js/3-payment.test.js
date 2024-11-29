// 3-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Create a spy for Utils.calculateNumber
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the original function
    spy.restore();
  });

  it('should call Utils.calculateNumber with "SUM" and correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    // Check if the spy was called once
    expect(spy.calledOnce).to.be.true;

    // Validate the arguments passed to Utils.calculateNumber
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    // Check the console output (optional, here for understanding)
    console.log('Spy Output:', spy.returnValues[0]);
  });
});