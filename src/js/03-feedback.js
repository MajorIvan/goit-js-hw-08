import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleInput, 500));
function handleInput() {

  const formStates = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(LS_KEY, JSON.stringify(formStates));
}

const storage = JSON.parse(localStorage.getItem(LS_KEY)) || {};
form.email.value = storage.email || '';
form.message.value = storage.message || '';


form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  console.log({
    email: form.email.value,
    message: form.message.value
  });

  localStorage.removeItem(LS_KEY);
  form.reset();
}