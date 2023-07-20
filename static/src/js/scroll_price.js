const link = document.querySelectorAll('a[href="#price_store"]');
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (event) {
    event.preventDefault();
    const element = document.querySelector("#price_store");
    element.scrollIntoView({ behavior: "smooth" });
  });
}
