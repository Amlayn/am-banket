const link = document.querySelectorAll('a[href="#contacts"]');
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (event) {
    event.preventDefault();
    const element = document.querySelector("#contacts_1");
    element.scrollIntoView({ behavior: "smooth" });
  });
}
