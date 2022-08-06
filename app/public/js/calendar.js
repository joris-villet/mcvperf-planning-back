const dayjs = require('dayjs');
const timezone = require('dayjs/plugin/timezone')
const weekYear = require('dayjs/plugin/weekYear') // dependent on weekOfYear plugin
const weekOfYear = require('dayjs/plugin/weekOfYear');
var weekday = require('dayjs/plugin/weekday')
var isoWeek = require('dayjs/plugin/isoWeek')
var calendar = require('dayjs/plugin/calendar')
var customParseFormat = require('dayjs/plugin/customParseFormat')
require('dayjs/locale/fr')

dayjs.extend(customParseFormat)
dayjs.extend(calendar)
dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)
dayjs.extend(weekYear)
dayjs.extend(weekday)
dayjs.extend(timezone);
dayjs.tz.setDefault("France/Paris");


// const arrMonth = [
  //   {
    //     month: "janvier",
    //     days: 31
    //   }
    // ]
    
    // console.log(dayjs().weekYear())
    
    // console.log(dayjs().format("DD MM YYYY"))
    
    // dayjs().isoWeek()
    // dayjs().isoWeekday()
    // dayjs().isoWeekYear()

// console.log("calendar => ", dayjs().calendar())

let currentMonth = dayjs().month() + 1;
let currentYear = dayjs().year();
let currentWeek = dayjs().isoWeek()
const currentDay = dayjs().date();

const today = dayjs().format("DD MMMM YYYY");

console.log("jour de la semaine => ", currentDay)

// const daysInMonth = getDaysInMonth(currentYear, currentMonth);
// console.log(daysInMonth)

const daysInMonth = dayjs(currentMonth).daysInMonth()
console.log("nombre de jours => ", daysInMonth)


const calendarDateNow = document.querySelector('.today');
calendarDateNow.textContent = today;



const generateCalendar = (daysInMonth) => {

  const calendarTable = document.querySelector('.calendar');

  const tbody = document.createElement('tbody');
  const tr = document.createElement('tr');
 
  
  for (let i = 1; i <= daysInMonth; i++) {
    let day = i;
    //console.log("jour => ", day)

    const td = document.createElement('td');
    td.textContent = day;
    tbody.appendChild(tr);
    tr.appendChild(td)

  }
  
  calendarTable.appendChild(tbody)


}

// const result = generateCalendar(daysInMonth)
// console.log(result)

const FullCalendar = require('fullcalendar');

var calendarEl = document.getElementById('calendar');
// var calendar = new FullCalendar.Calendar(calendarEl, {
//   initialView: 'dayGridMonth'
// });

//var calendar = new FullCalendar.Calendar();

console.log(FullCalendar)

