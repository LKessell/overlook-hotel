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
    customer = new Customer(customersTestData[0]);
  });

  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('Should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('Should have an ID number', () => {
    expect(customer.id).to.equal(1);
  });

  it('Should have a name', () => {
    expect(customer.name).to.equal('Leatha Ullrich');
  });
});
