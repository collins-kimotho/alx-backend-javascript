// 4-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub, consoleSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original functions
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Validate that the stub was called once
    expect(stub.calledOnce).to.be.true;

    // Validate the arguments passed to the stub
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Validate that console.log was called with the correct message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
