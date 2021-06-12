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

  it('Should have a number', () => {
    expect(room.number).to.equal(1);
  });

  it('Should have a roomType', () => {
    expect(room.roomType).to.equal('residential suite');
  });

  it('Should have a bidet property', () => {
    expect(room.bidet).to.equal(true);
  });
});
