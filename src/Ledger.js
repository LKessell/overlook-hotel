import Room from './Room';
import Booking from './Booking';

class Ledger {
  constructor(roomData, bookingData) {
    this.rooms = [];
    this.bookings = [];

    this.consolidateRooms(roomData);
    this.consolidateBookings(bookingData);
  }

  consolidateRooms(roomData) {
    roomData.forEach(room => {
      const newRoom = new Room(room);
      this.rooms.push(newRoom);
    });
  }

  consolidateBookings(bookingData) {
    bookingData.forEach(booking => {
      const newBooking = new Booking(booking);
      this.bookings.push(newBooking);
    });
  }
}

export default Ledger;
