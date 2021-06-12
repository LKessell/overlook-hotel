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
    return this.bookings.filter(booking => {
      const bookDate = new Date(booking.date).setHours(0,0,0,0);
      const givenDate = new Date(inputDate).setHours(0,0,0,0);

      if (bookDate <= givenDate) {
        return true;
      } else {
        return false;
      }
    });
  }

  getFutureBookings(inputDate) {
    return this.bookings.filter(booking => {
      const bookDate = new Date(booking.date).setHours(0,0,0,0);
      const givenDate = new Date(inputDate).setHours(0,0,0,0);

      if (bookDate >= givenDate) {
        return true;
      } else {
        return false;
      }
    });
  }
}

export default Customer;
