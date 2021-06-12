import Room from './Room';

class Ledger {
  constructor(roomData, bookingData) {
    this.rooms = [];

    this.consolidateRooms(roomData);
  }

  consolidateRooms(roomData) {
    roomData.forEach(room => {
      const newRoom = new Room(room);
      this.rooms.push(newRoom);
    });
  }
}

export default Ledger;
