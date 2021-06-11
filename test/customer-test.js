import chai from 'chai';
const expect = chai.expect;

import customersTestData from './test-data/customers-data.js';
import bookingsTestData from './test-data/bookings-data';
import Customer from '../src/Customer';

// describe('See if the tests are running', function() {
//   it('should return true', function() {
//     expect(true).to.equal(true);
//   });
// });

describe('Customer Class', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(customersTestData);
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });
});
