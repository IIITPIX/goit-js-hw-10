import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElement = document.querySelector('.form');
const buttonElement = formElement.querySelector('[type="submit"]');
const radioButtons = document.querySelectorAll('input[name="state"]');
const inputtedMS = formElement.querySelector('input[name="delay"]');
let radioButtonsValue = '';

formElement.addEventListener('submit', showToast);

function showToast(e) {
  e.preventDefault();
  const ms = inputtedMS.value;
  for (const e of radioButtons) {
    if (e.checked) {
      radioButtonsValue = e.value;
    }
  }
  if (radioButtonsValue === 'fulfilled') {
    createPromise(ms, true);
  } else {
    createPromise(ms, false);
  }
  formElement.reset();
}

function createPromise(ms, isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        iziToast.show({
          position: 'topRight',
          color: 'green',
          message: `✅ Fulfilled promise in ${ms}ms`,
        });
      } else {
        iziToast.show({
          position: 'topRight',
          color: 'red',
          message: `❌ Rejected promise in ${ms}ms`,
        });
      }
    }, ms);
  });
}
