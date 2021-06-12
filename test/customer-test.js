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
    expect(customer.bookings).to.deep.equal([
      {
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
      }
    ]);
  });

  it('Should sort bookings by descending date', () => {
    customer.sortBookings();
    expect(customer.bookings).to.deep.equal([
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
      },
      {
        'id': '5fwrgu4i7k55hl6t7',
        'userID': 1,
        'date': '2020/01/16',
        'roomNumber': 5,
        'roomServiceCharges': []
      }
    ]);
  });

  it('Should return a list of all past bookings', () => {
    expect(customer.getPastBookings('2020-01-12')).to.deep.equal([
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
      }
    ]);
  });

  it('Should return a list of current/future bookings', () => {
    expect(customer.getFutureBookings('2020-01-11')).to.deep.equal([
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
      }
    ]);
  });

  it('Should return false if there are no bookings to display', () => {
    expect(customer.getPastBookings('2020-01-04')).to.equal(false);
    expect(customer.getFutureBookings('2020-01-17')).to.equal(false);
  });

  it('Should calculate the total amount spent on bookings', () => {
    expect(customer.getTotalSpent()).to.equal(1260.75);
  });

  it('Should return 0 if customer has no bookings', () => {
    const newCustomer = new Customer({ 'id': 6, 'name': 'Bennett Schroeder' });

    expect(newCustomer.getTotalSpent()).to.equal(0);
  });
});
