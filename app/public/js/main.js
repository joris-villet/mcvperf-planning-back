const iconBook = document.querySelector('.fa-address-book');
const iconCalendar = document.querySelector('.fa-calendar');

const route = window.location.pathname;

if (route === '/rendez-vous') {
  require('./rdv.js');

  iconBook.style.color = "#fff";
  iconBook.style.opacity = "1";
}

if (route === '/calendrier') {
  require('./calendar.js');

  iconCalendar.style.color = "#fff";
  iconCalendar.style.opacity = "1";
}



