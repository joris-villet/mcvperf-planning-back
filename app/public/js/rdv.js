const axios = require('axios');
const flatpickr = require("flatpickr");
//require("flatpickr/dist/themes/material_blue.css");

const inputDate = document.querySelector('#date');
console.log('inputDate => ', inputDate)

flatpickr(inputDate, {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  altInput: true,
});


const btn = document.querySelector('#register-rdv');
btn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const payload = {
    name: document.querySelector('#name').value,
    car: document.querySelector('#car').value,
    purpose: document.querySelector('#purpose').value,
    phone: document.querySelector('#phone').value,
    date: document.querySelector('#date').value,
  }

  axios.post('http://localhost:3333/rdv/create', payload)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err))

})