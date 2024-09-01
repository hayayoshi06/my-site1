'use strict';

{
  const ham = document.querySelector('.hamburger');
  const nav = document.querySelector('#nav');
  const mask = document.querySelector('#mask');

  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    mask.classList.toggle('active');
  });
}