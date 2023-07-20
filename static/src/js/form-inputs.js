const feedbackFormInputs = document.querySelectorAll('.feedback__form-input');

const changeHandler = e => {
  const input = e.currentTarget;
  const label = input.nextElementSibling;
  if (input.value.length !== 0) label.classList.add('shrink');
  else if (input.value.length === 0) label.classList.remove('shrink');
};

feedbackFormInputs.forEach(input =>
  input.addEventListener('change', changeHandler)
);
