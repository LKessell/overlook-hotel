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
}

export default Customer;
