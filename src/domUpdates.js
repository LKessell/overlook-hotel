const domUpdates = {
  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },

  toggle(element, property) {
    element.classList.toggle(property);
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
    this.toggle(newBookView, 'hidden');
    this.toggle(newBookButton, 'active');
    this.toggle(dashboardView, 'hidden');
    this.toggle(dashboardButton, 'active');
    this.toggle(navMenu, 'open');
  },

  changeText(text, element) {
    element.innerText = text;
  },

  capitalizeWords(string) {
    const words = string.split(' ');

    return words.map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  },

  getBidetValue(boolean) {
    if (boolean) {
      return 'Yes';
    } else {
      return 'No';
    }
  },

  renderRoomCards(container, data) {
    container.innerHTML = '';

    if (data.length) {
      data.forEach(element => {
        const image = element.roomType.split(' ')[0];
        const capType = this.capitalizeWords(element.roomType);
        const capBed = this.capitalizeWords(element.bedSize);
        const bidetVal = this.getBidetValue(element.bidet);

        container.innerHTML += `
        <article>
          <div class="image-wrapper">
            <img src="./images/${image}.jpg" alt="${element.roomType}">
            <div class="image-overlay">
              <button class="more-info" title="select room" id="${image + '-' + element.number}"><i class="fas fa-plus-circle"></i></button>
              <div class="overlay-text">
                <p>Number</p>
                <p>${element.number}</p>
              </div>
            </div>
          </div>
          <section class="article-text">
            <p class="name-text">${capType}</p>
            <p class="info-text">Bidet: ${bidetVal}</p>
            <p class="info-text">Bed Size: ${capBed}</p>
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
    const capType = this.capitalizeWords(roomData.roomType);

    modalContent.innerHTML = `
      <img class="modal-image" src="./images/${type}.jpg">
      <p>Confirm Your Booking Details:</p>
      <p>Date: ${datePicker.value}</p>
      <p>Room Number: ${roomNum}</p>
      <p>Room Type: ${capType}</p>
      <p>Cost: $${roomData.costPerNight.toFixed(2)}</p>
      <button class="submit" id="postBooking" value="${roomNum}">Confirm This Booking</button>
      <p class="error-message" id="errorMsg"></p>
    `;
  },

  clearContent(container) {
    container.innerHTML = '';
  },
}

export default domUpdates;
