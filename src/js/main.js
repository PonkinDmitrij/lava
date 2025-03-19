import '../scss/style.scss';

const burger = document.querySelector('.burger');
const navList = document.querySelector('.page-header__nav-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--close');
  if (burger.classList.contains('burger--close')) {
    navList.style.maxHeight = `${navList.scrollHeight}px`;
  } else {
    navList.style.maxHeight = '';
  }
});
