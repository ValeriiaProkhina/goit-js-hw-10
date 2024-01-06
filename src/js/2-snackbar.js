import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = form.elements['delay'].value;
  const state = form.elements['state'].value;

  const isFulfilled = state === 'fulfilled';
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      isFulfilled ? resolve(delay) : reject(delay);
    }, delay);
  });

  promise
    .then(() => {
      iziToast.success({
        title: 'OK',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
  form.reset();
});
