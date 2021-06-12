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
});
