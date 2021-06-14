const domUpdates = {
  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },

  toggle(element) {
    element.classList.toggle('hidden');
  },

  toggleActive(element) {
    element.classList.toggle('active');
  },

  renderBookings(container, data) {
    container.innerHTML = '';
    if (data.length) {
      data.forEach(element => {
        container.innerHTML += `
        <article class="single-booking">
        <i class="fas fa-calendar-day list-icon"></i>
        <div>
        <h4>Date:</h4>
        <p>${element.date}</p><br>
        <h4>Room Number:</h4>
        <p>${element.roomNumber}</p>
        </div>
        </article>
        `
      })
    } else {
      container.innerHTML = 'No bookings to display';
    }
  },

  switchViews() {
    this.toggle(newBookView);
    this.toggleActive(newBookButton);
    this.toggle(dashboardView);
    this.toggleActive(dashboardButton);
  },
}

export default domUpdates;
