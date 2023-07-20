// HELPERS
const revealElementSequently = (seconds, ...args) => {
  return new Promise(resolve =>
    setTimeout(
      node => {
        node.classList.add('element--visible');
        resolve();
      },
      seconds * 1000,
      ...args
    )
  );
};

const revealContent = (className, threshold = 0.22) => {
  const container = document.querySelector(`.${className}`);

  const revealElement = async (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    Array.from(entry.target.children).forEach(async (node, i) => {
      await revealElementSequently(i * 0.35, node);
    });

    observer.unobserve(entry.target);
  };

  const observer = new IntersectionObserver(revealElement, {
    root: null,
    threshold,
  });

  observer.observe(container);
};

const revealContentOkayeg = (className, excludeClassName, threshold = 0.22) => {
  const container = document.querySelector(`.${className}`);
  const children = [...container.children].filter(
    node =>
      !excludeClassName.some(className => node.classList.contains(className))
  );

  const revealElement = async (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    children.forEach(async (node, i) => {
      await revealElementSequently(i * 0.35, node);
    });

    observer.unobserve(entry.target);
  };

  const observer = new IntersectionObserver(revealElement, {
    root: null,
    threshold,
  });

  observer.observe(container);
};

// HEADER
const header = document.querySelector('.header');
const headerGrid = document.querySelector('.header__grid');
const gridHeight = headerGrid.getBoundingClientRect().height;

const stickyGrid = entries => {
  const [entry] = entries;

  if (document.documentElement.offsetWidth <= 1000) {
    !entry.isIntersecting && headerGrid.classList.add('header__grid--fixed');
    entry.isIntersecting && headerGrid.classList.remove('header__grid--fixed');
  }
};

const headerObserver = new IntersectionObserver(stickyGrid, {
  root: null,
  threshold: 1,
  rootMargin: `${gridHeight}px`,
});

headerObserver.observe(header);

// HERO
revealContent('header__hero');

// DESCRIPTION
revealContent('description-section');

// BANQUET
revealContentOkayeg('testimonials-banquet .container', [
  'testimonials-banquet__list',
]);

// TESTIMONIALS
revealContent('testimonials-banquet__list');

// TRIPLE_PIC_WEDDING
revealContentOkayeg('triple-pic--wedding .triple-pic__inner', [
  'triple-pic__left',
  'triple-pic__right',
]);
revealContent('triple-pic--wedding .triple-pic__left');
revealContent('triple-pic--wedding .triple-pic__right');

// DOUBLE_PIC_BANQUET
revealContentOkayeg('double-pic__inner', [
  'double-pic__left',
  'double-pic__right',
]);
revealContent('double-pic__left');
revealContent('double-pic__right');

// TRIPLE_PIC_KITCHEN
revealContentOkayeg('triple-pic--kitchen .triple-pic__inner', [
  'triple-pic__left',
  'triple-pic__right',
]);

revealContent('triple-pic--kitchen .triple-pic__left');
revealContent('triple-pic--kitchen .triple-pic__right');

// COOPERATION
revealContentOkayeg('cooperation__inner', [
  'cooperation__left',
  'cooperation__right',
]);
revealContent('cooperation__left');
revealContent('cooperation__right');

// SALES
revealContent('sales__list');

// FEEDBACK
revealContent('feedback__right');
revealContent('feedback__content');

// FOOTER
revealContent('footer__inner');
