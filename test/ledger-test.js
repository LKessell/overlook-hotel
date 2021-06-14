import chai from 'chai';
const expect = chai.expect;

import bookingsTestData from './test-data/bookings-data';
import roomsTestData from './test-data/rooms-data';
import Booking from '../src/Booking';
import Room from '../src/Room';
import Ledger from '../src/Ledger';

describe('Ledger Class', () => {
  let ledger;

  beforeEach(() => {
    ledger = new Ledger(roomsTestData, bookingsTestData);
  });

  it('Should be a function', () => {
    expect(Ledger).to.be.a('function');
  });

  it('Should be an instance of the Ledger class', () => {
    expect(ledger).to.be.an.instanceof(Ledger);
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

  it('Should hold an array of all Booking instances', () => {
    expect(ledger.bookings[0]).to.be.an.instanceof(Booking);
    expect(ledger.bookings).to.deep.equal([
      {
        'id': '5fwrgu4i7k55hl6sz',
        'userID': 2,
        'date': '2020/01/22',
        'roomNumber': 1,
        'roomServiceCharges': []
      },
      {
        'id': '5fwrgu4i7k55hl6t5',
        'userID': 4,
        'date': '2020/01/24',
        'roomNumber': 4,
        'roomServiceCharges': []
      },
      {
        'id': '5fwrgu4i7k55hl6t6',
        'userID': 3,
        'date': '2020/01/10',
        'roomNumber': 2,
        'roomServiceCharges': []
      },
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
        'id': '5fwrgu4i7k55hl6t9',
        'userID': 5,
        'date': '2020/01/14',
        'roomNumber': 3,
        'roomServiceCharges': []
      },
      {
        'id': '5fwrgu4i7k55hl6ta',
        'userID': 2,
        'date': '2020/01/11',
        'roomNumber': 5,
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
        'id': '5fwrgu4i7k55hl6tc',
        'userID': 3,
        'date':'2020/01/30',
        'roomNumber': 4,
        'roomServiceCharges': []
      }
    ]);
  });

  it('Should return all rooms without a booking on a given date', () => {
    expect(ledger.getAvailableRooms('2020-01-11')).to.deep.equal([
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
      }
    ]);
  });

  it('Should return false if no rooms are available that day', () => {
    const new1 = new Booking({
      'id': '5fwrgu4i7k55hl6f67',
      'userID': 1,
      'date': '2020/01/11',
      'roomNumber': 1,
      'roomServiceCharges': []
    });
    const new2 = new Booking({
      'id': '5fwrgu4i7k55hl6tzy4',
      'userID': 1,
      'date': '2020/01/11',
      'roomNumber': 2,
      'roomServiceCharges': []
    });
    const new3 = new Booking({
      'id': '5fwrgu4i7k55hl6fff8',
      'userID': 1,
      'date': '2020/01/11',
      'roomNumber': 3,
      'roomServiceCharges': []
    });
    ledger.bookings.push(new1, new2, new3);

    expect(ledger.getAvailableRooms('2020-01-11')).to.equal(false);
  });

  it('Should filter rooms by room type', () => {
    expect(ledger.filterByType(roomsTestData, 'suite')).to.deep.equal([
      {
        'number': 2,
        'roomType': 'suite',
        'bidet': false ,
        'bedSize': 'full',
        'numBeds': 2,
        'costPerNight': 477.38
      }
    ]);
  });

  it('Should return false if no matches are found', () => {
    const availableRooms = ledger.getAvailableRooms('2020-01-11');
    expect(ledger.filterByType(availableRooms, 'junior suite')).to.equal(false);
  });

  it('Should return a room\'s data when given the number', () => {
    expect(ledger.getRoomByNumber(4)).to.deep.equal({
      'number': 4,
      'roomType': 'single room',
      'bidet': false,
      'bedSize': 'queen',
      'numBeds': 1,
      'costPerNight': 429.44
    });
  });
});
