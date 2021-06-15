# 🏨 Overlook Hotel 🏨

## Table of Contents
  - <a href="#overview">Overview</a>
  - <a href="#setup-instructions">Setup Instructions</a>
  - <a href="#technologies-used">Technologies Used</a>
  - <a href="#contributors">Contributors</a>
  - <a href="#challenges-and-wins">Challenges and Wins</a>
  - <a href="#future-additions">Future Additions</a>

## <a id="#overview">Overview</a>
This is a one-week project completed as the final solo challenge in Module 2 of the Turing School of Software and Design Front-End program. This project centered around building a hotel-like room booking app. The app allows users to log in and see past and upcoming bookings, track the amount they have spent on rooms, as well as create new bookings for the future. This project focused heavily on the asynchronous nature of the fetch API, and displaying the API data in the DOM. 

## <a id="#setup-instructions">Setup Instructions</a>
Users can log in with the following username and password combination:
- Username: customer# (with # being a number between 1 and 50)
- Password: overlook2021 (for all users)

## <a id="#technologies-used">Technologies Used</a>
- HTML
- Sass CSS
- Vanilla JavaScript
- Webpack
- Mocha/Chai
- fetch API to retrieve data

## <a id="#contributors">Contributors</a>
[Lauren Kessell](https://github.com/LKessell)  
[Kat White](https://github.com/k-atwhite); Code review

## <a id="#challenges-and-wins">Challenges and Wins</a>
Using fetch to retrieve data from the API was very challenging! There were a lot of moving pieces in this project, and making sure that all of the data was retrieved successfully before trying to update the DOM was tricky, especially when implementing the login and refreshing after a new booking was created.  
Working with dates was also a challenge, as the API expected a different format for new bookings to be submitted successfully.  

Paying attention to accessibility was important throughout this project, and I'm pretty happy with my app's tabbing functionality. This presented some interesting challenges with the date input, but I'm pleased with how it turned out.  
Responsiveness was also a key focus, and I'm proud of how my mobile-to-larger-screens navigation menu functions.

## <a id="#future-additions">Future Additions</a>
- Refactoring; Having only a week to complete the project, there are many opportunities for improvement!
- Manager login: Adding a manager login functionality to manage and delete bookings
- Filtering/ Additional info for customer bookings
