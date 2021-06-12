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

  it('Should hold an array of all Room instances', () => {
    expect(ledger.rooms[0]).to.be.an.instanceof(Room);
    expect(ledger.rooms).to.deep.equal([
      {
        'number': 1,
        'roomType': 'residential suite',
        'bidet': true,
        'bedSize': 'queen',
        'numBeds': 1,
        'costPerNight': 358.4
      },
      {
        'number': 2,
        'roomType': 'suite',
        'bidet': false ,
        'bedSize': 'full',
        'numBeds': 2,
        'costPerNight': 477.38
      },
      {
        'number': 3,
        'roomType': 'single room',
        'bidet': false,
        'bedSize': 'king',
        'numBeds': 1,
        'costPerNight': 491.14
      },
      {
        'number': 4,
        'roomType': 'single room',
        'bidet': false,
        'bedSize': 'queen',
        'numBeds': 1,
        'costPerNight': 429.44
      },
      {
        'number': 5,
        'roomType': 'junior suite',
        'bidet': true,
        'bedSize': 'queen',
        'numBeds': 2,
        'costPerNight': 340.17
      }
    ]);
  });


});
