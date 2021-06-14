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
      });
    } else {
      container.innerHTML = '<p>No bookings to display</p>';
    }
  },

  switchViews() {
    this.toggle(newBookView);
    this.toggleActive(newBookButton);
    this.toggle(dashboardView);
    this.toggleActive(dashboardButton);
    this.toggle(navMenu)
  },

  changeHeading(text, element) {
    element.innerText = text;
  },

  renderRoomCards(container, data) {
    container.innerHTML = '';

    if (data.length) {
      data.forEach(element => {
        const image = element.roomType.split(' ')[0];

        container.innerHTML += `
        <article>
          <div class="image-wrapper">
            <img src="./images/${image}.jpg" alt="${element.roomType}">
            <div class="image-overlay">
              <button class="more-info" id="${image + '-' + element.number}"><i class="fas fa-info-circle"></i></button>
              <div class="overlay-text">
                <p>Number</p>
                <p>${element.number}</p>
              </div>
            </div>
          </div>
          <section class="article-text">
            <p class="name-text">${element.roomType}</p>
            <p class="info-text">Bidet: ${element.bidet}</p>
            <p class="info-text">Bed Size: ${element.bedSize}</p>
            <p class="info-text">Number of Beds: ${element.numBeds}</p>
            <p class="info-text">Cost Per Night:</p>
            <p>$${element.costPerNight.toFixed(2)}</p>
          </section>
        </article>
        `;
      });
    } else {
      container.innerHTML = '<p>We are very sorry, but no rooms match your current selections.</p><p>Please try a different date or room type.</p>';
    }
  },

  renderModalContent(event, ledger) {
    const id = event.target.closest('button').id.split('-');
    const type = id[0];
    const roomNum = parseInt(id[1]);
    const roomData = ledger.getRoomByNumber(roomNum);

    modalContent.innerHTML = `
      <img class="modal-image" src="./images/${type}.jpg">
      <p>Confirm booking:</p>
      <p>Date: ${datePicker.value}</p>
      <p>Room Number: ${roomNum}</p>
      <p>Room Type: ${roomData.roomType}</p>
      <p>Cost: $${roomData.costPerNight.toFixed(2)}</p>
      <button class="submit" id="postBooking">Confirm This Booking</button>
    `;
  },
}

export default domUpdates;
