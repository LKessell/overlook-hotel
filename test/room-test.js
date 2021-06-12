import chai from 'chai';
const expect = chai.expect;

import roomsTestData from './test-data/rooms-data';
import Room from '../src/Room';

describe.only('Room Class', () => {
  let room;

  beforeEach(() => {
    room = new Room(roomsTestData[0]);
  });


});
