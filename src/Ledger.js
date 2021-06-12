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

  getAvailableRooms(date) {
    const modDate = date.split('-').join('/');
    const bookedRoomNums = this.bookings.reduce((booked, booking) => {
      if (booking.date === modDate) {
        booked.push(booking.roomNumber);
      }
      return booked;
    }, []);
    const matchedRooms = this.rooms.filter(room => !bookedRoomNums.includes(room.number));

    if (matchedRooms.length) {
      return matchedRooms;
    } else {
      return false;
    }
  }
}

export default Ledger;
