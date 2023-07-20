const link = document.querySelector('.photo');

link.addEventListener('click', function (event) {
  event.preventDefault();
  
  const targetElement = document.querySelector('.photo_1');
  
  if (targetElement) {
    const targetElementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetElementPosition,
      behavior: 'smooth'
    });
  }
});