import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button');
const daysLeft = document.querySelector('span[data-days');
const hoursLeft = document.querySelector('span[data-hours');
const minLeft = document.querySelector('span[data-minutes');
const secLeft = document.querySelector('span[data-seconds');
let userSelectedDate;

const dataPicker = flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() <= new Date().getTime()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  },
});

button.addEventListener('click', updateCountdown);

function updateCountdown() {
  button.disabled = true;
  setInterval(() => {
    userSelectedDate = dataPicker.selectedDates[0];
    const currentTime = new Date();
    const timeLeft = userSelectedDate - currentTime;
    if (timeLeft >= 0) {
      const renderTime = convertMs(timeLeft);

      daysLeft.textContent = addLeadingZero(renderTime.days);
      hoursLeft.textContent = addLeadingZero(renderTime.hours);
      minLeft.textContent = addLeadingZero(renderTime.minutes);
      secLeft.textContent = addLeadingZero(renderTime.seconds);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
