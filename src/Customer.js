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
}

export default Customer;
