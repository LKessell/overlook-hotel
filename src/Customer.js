class Customer {
  constructor(customerData, bookingData) {
    this.id = customerData.id;
    this.name = customerData.name;
    this.bookings = [];

    this.getBookings(bookingData);
  }

  getBookings(bookingData) {
    const matchedBookings = bookingData.filter(booking => booking.userID === this.id);
    this.bookings = matchedBookings;
  }

  sortBookings() {
    return this.bookings.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  getPastBookings(inputDate) {
    const results = this.bookings.filter(booking => {
      const bookDate = new Date(booking.date);
      const givenDate = new Date(inputDate);

      if (bookDate <= givenDate) {
        return true;
      } else {
        return false;
      }
    });

    if (results.length) {
      return results;
    } else {
      return false;
    }
  }

  getFutureBookings(inputDate) {
    const results = this.bookings.filter(booking => {
      const bookDate = new Date(booking.date);
      const givenDate = new Date(inputDate);

      if (bookDate >= givenDate) {
        return true;
      } else {
        return false;
      }
    });

    if (results.length) {
      return results;
    } else {
      return false;
    }
  }

  getTotalSpent(roomData) {
    const roomNums = this.bookings.map(booking => booking.roomNumber);

    return roomNums.reduce((sum, roomNum) => {
      const match = roomData.find(room => room.number === roomNum);

      sum += match.costPerNight;

      return sum;
    }, 0);
  }
}

export default Customer;
