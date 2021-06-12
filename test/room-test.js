import chai from 'chai';
const expect = chai.expect;

import roomsTestData from './test-data/rooms-data';
import Room from '../src/Room';

describe.only('Room Class', () => {
  let room;

  beforeEach(() => {
    room = new Room(roomsTestData[0]);
  });

  it('Should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('Should be an instance of the Room class', () => {
    expect(room).to.be.an.instanceof(Room);
  });
});
