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

// Query Selectors

// Event Listeners

// Scripts
const fetchData = (type) => {
  return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(checkForGetError)
    .catch(err => console.error(err));
}

const checkForGetError = (response) => {
  if (!response.ok) {
    throw new Error('Could not retrieve data, please try again.');
  } else {
    return response.json();
  }
}
