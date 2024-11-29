// api.test.js

const request = require('request');
const { expect } = require('chai');

// Integration test for the Index page
describe('Index page', () => {
  it('should return a status code of 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return the correct content type', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});

// Test suite for the /cart/:id route
describe('Cart page', () => {
  it('should return status code 200 when id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when id is not a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Not Found');
      done();
    });
  });

  it('should return status code 404 when id is a decimal number', (done) => {
    request('http://localhost:7865/cart/12.5', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Not Found');
      done();
    });
  });

  it('should return status code 404 when id is empty', (done) => {
    request('http://localhost:7865/cart/', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Not Found');
      done();
    });
  });
});
