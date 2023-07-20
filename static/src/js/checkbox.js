const checkbox = document.getElementById('check-1');
const button = document.querySelector('.feedback__btn');

checkbox.addEventListener('change', event => {
  event.target.checked && button.removeAttribute('disabled');
  !event.target.checked && button.setAttribute('disabled', true);
});
