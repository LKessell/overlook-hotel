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

  it('Should store a list of bookings', () => {
    expect(customer.bookings).to.deep.equal({
      'id': '5fwrgu4i7k55hl6t7',
      'userID': 1,
      'date': '2020/01/16',
      'roomNumber': 5,
      'roomServiceCharges': []
    },
    {
      'id': '5fwrgu4i7k55hl6t8',
      'userID': 1,
      'date': '2020/01/05',
      'roomNumber': 3,
      'roomServiceCharges': []
    },
    {
      'id': '5fwrgu4i7k55hl6tb',
      'userID': 1,
      'date': '2020/01/11',
      'roomNumber': 4,
      'roomServiceCharges': []
    });
  });

  it('Should sort bookings by descending date', () => {
    customer.sortBookings();
    expect(customer.bookings).to.deep.equal({
      'id': '5fwrgu4i7k55hl6t8',
      'userID': 1,
      'date': '2020/01/05',
      'roomNumber': 3,
      'roomServiceCharges': []
    },
    {
      'id': '5fwrgu4i7k55hl6tb',
      'userID': 1,
      'date': '2020/01/11',
      'roomNumber': 4,
      'roomServiceCharges': []
    },
    {
      'id': '5fwrgu4i7k55hl6t7',
      'userID': 1,
      'date': '2020/01/16',
      'roomNumber': 5,
      'roomServiceCharges': []
    });
  });
});
