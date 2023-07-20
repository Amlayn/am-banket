const header = document.querySelector('.header');
const headerGrid = document.querySelector('.header__grid');
const headerMenuListAdditional = document.querySelector(
  '.header__menu-list--additional'
);
const headerAddress = document.querySelector('.header__address');

const button = document.querySelector('.dropdown-btn');

button.addEventListener('click', event => {
  event.preventDefault();

  const button = event.currentTarget;

  if (button.classList.contains('dropdown-btn--active')) {
    button.classList.remove('dropdown-btn--active');
    headerMenuListAdditional.classList.add('hidden');
    headerAddress.classList.add('hidden');
    headerGrid.classList.remove('header__grid--expand');
    document.body.style.overflow = '';
  } else if (!button.classList.contains('dropdown-btn--active')) {
    button.classList.add('dropdown-btn--active');
    headerMenuListAdditional.classList.remove('hidden');
    headerAddress.classList.remove('hidden');
    headerGrid.classList.add('header__grid--expand');
    document.body.style.overflow = 'hidden';
  }
});

const headerLogo = document.querySelectorAll('.scroll--smooth');

headerLogo.forEach(logo =>
  logo.addEventListener('click', () =>
    header.scrollIntoView({ behavior: 'smooth' })
  )
);
