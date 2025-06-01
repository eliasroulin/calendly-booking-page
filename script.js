// JavaScript functionality for Calendly-like booking page

const calendarEl = document.getElementById('calendar');
const timeslotsEl = document.getElementById('timeslots');
const summaryEl = document.getElementById('selected-info');

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = [20, 21, 22, 23, 24, 25, 26];

let selectedDate = null;
let selectedTime = null;

// Render calendar
days.forEach(day => {
  const div = document.createElement('div');
  div.textContent = day;
  calendarEl.appendChild(div);
});

dates.forEach(date => {
  const div = document.createElement('div');
  div.textContent = date;
  div.addEventListener('click', () => {
    document.querySelectorAll('.calendar div').forEach(el => el.classList.remove('selected'));
    div.classList.add('selected');
    selectedDate = date;
    showTimeSlots();
  });
  calendarEl.appendChild(div);
});

const times = ['9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '2:00pm'];

function showTimeSlots() {
  timeslotsEl.innerHTML = '';
  times.forEach(time => {
    const btn = document.createElement('button');
    btn.textContent = time;
    btn.addEventListener('click', () => {
      selectedTime = time;
      updateSummary();
    });
    timeslotsEl.appendChild(btn);
  });
}

function updateSummary() {
  if (selectedDate && selectedTime) {
    summaryEl.textContent = `You booked: April ${selectedDate} at ${selectedTime}`;
  }
}

// Optional: Reset selection (for improvement)
function resetBooking() {
  selectedDate = null;
  selectedTime = null;
  summaryEl.textContent = 'No slot selected yet.';
  document.querySelectorAll('.calendar div').forEach(el => el.classList.remove('selected'));
  timeslotsEl.innerHTML = '';
}

// Example reset button (to add to HTML if desired)
// <button onclick="resetBooking()">Reset</button>

