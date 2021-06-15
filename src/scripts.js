// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './css/base.scss';

import './images/turing-logo.png';
import './images/junior.jpg';
import './images/residential.jpg';
import './images/single.jpg';
import './images/suite.jpg';

import Booking from './Booking';
import Customer from './Customer';
import Ledger from './Ledger';
import Room from './Room';

import domUpdates from './domUpdates';

// Variables
let customer;
let ledger;
let rooms = [];
let bookings = [];
const todayDate = '2020-02-01';

// Query Selectors
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const dropdownButton = document.getElementById('dropdownButton');
const dropdownName = document.getElementById('dropdownName');
const dropdownInfo = document.getElementById('dropdownInfo');
const dashboardButton = document.getElementById('dashboardButton');
const newBookButton = document.getElementById('newBookButton');
const containerHeading = document.getElementById('containerHeading');
const dashboardView = document.getElementById('dashboardView');
const currentBookings = document.getElementById('currentBookings');
const pastBookings = document.getElementById('pastBookings');
const newBookView = document.getElementById('newBookView');
const datePicker = document.getElementById('datePicker');
const typeFilter = document.getElementById('typeFilter');
const submitSearch = document.getElementById('submitSearch');
const availableRooms = document.getElementById('availableRooms');
const postModal = document.getElementById('postModal');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');
const successMsg = document.getElementById('successMsg');

// Event Listeners
window.addEventListener('DOMContentLoaded', () => {
  datePicker.value = todayDate;
  setUpRooms();
});

menuToggle.addEventListener('click', () => {
  domUpdates.toggle(navMenu, 'open');
});

dropdownButton.addEventListener('click', () => {
  domUpdates.toggle(dropdownInfo, 'hidden');
});

newBookButton.addEventListener('click', () => {
  domUpdates.changeText('Book a New Room', containerHeading);
  domUpdates.switchViews();
});

dashboardButton.addEventListener('click', () => {
  domUpdates.changeText('My Bookings', containerHeading);
  domUpdates.switchViews();
});

submitSearch.addEventListener('click', () => {
  getRoomSelections();
});

availableRooms.addEventListener('click', (event) => {
  selectRoomToBook(event);
});

closeModal.addEventListener('click', () => {
  domUpdates.toggle(postModal, 'hidden');
});

modalContent.addEventListener('click', (event) => {
  createBooking(event);
});

datePicker.addEventListener('click', () => {
  domUpdates.clearContent(availableRooms);
});

// Scripts
const fetchData = (type) => {
  return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => checkForGetError(response))
    .catch(err => console.error(err));
}

const postBooking = (bookingInfo) => {
  fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingInfo)
  })
    .then(checkForPostError)
    .then(setUpRooms)
    .then(resetToDashboard)
    .catch(err => displayErrorMesssage(err));
}

const checkForGetError = (response) => {
  if (!response.ok) {
    throw new Error('Could not retrieve data, please try again.');
  } else {
    return response.json();
  }
}

const checkForPostError = (response) => {
  if (!response.ok) {
    throw new Error('Please make sure a valid date is chosen.');
  } else {
    return response.json();
  }
}

const displayErrorMesssage = (err) => {
  console.error(err.message);
}

const setUpRooms = () => {
  rooms = [];
  fetchData('rooms')
    .then(data => data.rooms.forEach(element => rooms.push(element)))
    .then(() => setUpBookings())
}

const setUpBookings = () => {
  bookings = [];
  fetchData('bookings')
    .then(data => data.bookings.forEach(element => bookings.push(element)))
    .then(() => {
      setUpLedger(rooms, bookings);
      loadUserInfo();
    })
}

const setUpLedger = (roomData, bookingData) => {
  ledger = new Ledger(roomData, bookingData);
}

const loadUserInfo = () => {
  fetchData('customers/2')
    .then(customerData => customer = new Customer(customerData, ledger.bookings))
    .then(() => {
      updateUser();
  })
}
const updateUser = () => {
  const amount = customer.getTotalSpent(ledger.rooms);
  dropdownName.innerText = customer.name;
  dropdownInfo.innerHTML = `
    <p>My lifetime room spendings:</p>
    <p>$${amount.toFixed(2)}</p>
  `;
  populateBookings();
}

const populateBookings = () => {
  const sorted = customer.sortBookings();
  const past = customer.getPastBookings(todayDate);
  const future = customer.getFutureBookings(todayDate);

  domUpdates.renderBookings(currentBookings, future);
  domUpdates.renderBookings(pastBookings, past);
}

const getRoomSelections = () => {
  let data;
  const dateMatches = ledger.getAvailableRooms(datePicker.value);

  if (typeFilter.value === 'all') {
    data = dateMatches;
  } else {
    data = ledger.filterByType(dateMatches, typeFilter.value);
  }

  domUpdates.renderRoomCards(availableRooms, data)
}

const selectRoomToBook = (event) => {
  if (event.target.classList.contains('fas')) {
    domUpdates.renderModalContent(event, ledger);
    domUpdates.toggle(postModal, 'hidden');
  }
}

const createBooking = (event) => {
  if (event.target.id === 'postBooking') {
    const date = datePicker.value.split('-').join('/');
    const data = { 'userID': customer.id, 'date': date, 'roomNumber': parseInt(event.target.value) };
    postBooking(data)
  }
}

const resetToDashboard = () => {
  domUpdates.toggle(postModal, 'hidden');
  domUpdates.changeText('My Bookings', containerHeading);
  domUpdates.switchViews();
  domUpdates.toggle(navMenu, 'open');
  domUpdates.clearContent(availableRooms);
  domUpdates.changeText('Your booking was successful!', successMsg);
  scroll(0,0);
  setTimeout(() => domUpdates.clearContent(successMsg), 2000);
}
