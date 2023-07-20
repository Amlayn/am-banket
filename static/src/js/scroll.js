const descriptionLink = document.querySelector('[href="#description"]');
descriptionLink.addEventListener("click", function (event) {
  event.preventDefault(); // отменяем действие ссылки по умолчанию
  const descriptionElem = document.querySelector("#description");
  descriptionElem.scrollIntoView({
    behavior: "smooth", // анимированная плавная прокрутка
  });
});
