function showForm() {
  const feedbackForm = document.querySelector(".feedback__form");
  feedbackForm.style.display = "block";

  // добавляем обработчик события "click" на элемент крестика
  const closeFormBtn = document.querySelector(".close_form");
  closeFormBtn.addEventListener("click", function () {
    feedbackForm.style.display = "none";
  });
}
