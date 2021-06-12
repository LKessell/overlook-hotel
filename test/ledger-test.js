import chai from 'chai';
const expect = chai.expect;

import bookingsTestData from './test-data/bookings-data';
import roomsTestData from './test-data/rooms-data';
import Booking from '../src/Booking';
import Room from '../src/Room';

describe('Ledger Class', () => {
  let ledger;

  beforeEach(() => {
    ledger = new Ledger(roomData, bookingData);
  });
});
