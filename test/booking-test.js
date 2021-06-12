import chai from 'chai';
const expect = chai.expect;

import bookingsTestData from './test-data/bookings-data';
import Booking from '../src/Booking';

describe('Booking Class', () => {
  let booking;

  beforeEach(() => {
    booking = new Booking(bookingsTestData[0]);
  });

  it('Should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('Should be an instance of the Booking class', () => {
    expect(booking).to.be.an.instanceof(Booking);
  });

  it('Should have an id', () => {
    expect(booking.id).to.equal('5fwrgu4i7k55hl6sz');
  });

  it('Should have a user id', () => {
    expect(booking.userID).to.equal(2);
  });
});
