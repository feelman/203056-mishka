var navMain = document.querySelector('.main-nav');
var secondNav = document.querySelector('.page-header__user-items');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    secondNav.classList.remove('main-nav--closed');
    secondNav.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    secondNav.classList.add('main-nav--closed');
    secondNav.classList.remove('main-nav--opened');
   } 
 });