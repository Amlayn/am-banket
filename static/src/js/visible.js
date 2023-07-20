const bookBtn = document.querySelector(".header__btns .header__btn");
const feedbackForm = document.querySelector(".feedback__form");

bookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  feedbackForm.classList.add("feedback__form--visible");
});
