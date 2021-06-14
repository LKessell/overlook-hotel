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
        let image = element.roomType.split(' ')[0];
        container.innerHTML += `
        <article>
          <div class="image-wrapper">
            <img src="./images/${image}.jpg" alt="${element.roomType}">
            <div class="image-overlay">
              <button class="more-info"><i class="fas fa-info-circle"></i></button>
              <div class="overlay-text">
                <p>Number</p>
                <p class="counter">${element.number}</p>
              </div>
            </div>
          </div>
          <section class="article-text">
            <p class="name-text">${element.roomType}</p>
            <p class="info-text">Bidet: ${element.bidet}</p>
            <p class="info-text">Bed Size: ${element.bedSize}</p>
            <p class="info-text">Number of Beds: ${element.numBeds}</p>
            <p class="info-text">Cost Per Night:</p>
            <p class="counter">$${element.costPerNight.toFixed(2)}</p>
          </section>
        </article>
        `;
      });
    } else {
      container.innerHTML = '<p>We are very sorry, but no rooms match your current selections.</p><p>Please try a different date or room type.</p>';
    }
  }
}

export default domUpdates;
