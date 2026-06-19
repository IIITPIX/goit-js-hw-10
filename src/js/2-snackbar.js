import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElement = document.querySelector('.form');
const buttonElement = formElement.querySelector('[type="submit"]');
const radioButtons = document.querySelectorAll('input[name="state"]');
const inputtedMS = formElement.querySelector('input[name="delay"]');

const radioButtonResolved = formElement.querySelector(
  'input[value="fulfilled"]'
);

let isSucces = false;

formElement.addEventListener('submit', showToast);

function showToast(e) {
  e.preventDefault();
  isSucces = radioButtonResolved.checked;

  const promise = new Promise((resolve, reject) => {
    const delay = Number(inputtedMS.value);

    setTimeout(() => {
      if (isSucces) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(ms => {
      iziToast.show({
        position: 'topRight',
        color: 'green',
        message: `✅ Fulfilled promise in ${ms}ms`,
      });
    })
    .catch(ms => {
      iziToast.show({
        position: 'topRight',
        color: 'red',
        message: `❌ Rejected promise in ${ms}ms`,
      });
    });
  formElement.reset();
}
