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

  it('Should have a date', () => {
    expect(booking.date).to.equal('2020/01/22');
  });

  it('Should have a room number', () => {
    expect(booking.roomNumber).to.equal(1);
  });

  it('Should start with no room service charges', () => {
    expect(booking.roomServiceCharges).to.deep.equal([]);
  });
});
