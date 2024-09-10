'use strict';

{
  const ham = document.querySelector('.hamburger');
  const navi = document.querySelector('#navi');
  const mask = document.querySelector('#mask');

  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    navi.classList.toggle('active');
    mask.classList.toggle('active');
  });

  function scrollCallback (entries) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        header.classList.add("scrolled");
        toTop.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        toTop.classList.remove("scrolled");
      }
    });
  }

  const toTop = document.getElementById("to_top");

  toTop.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  });

  const header = document.querySelector("header");

  const scrollObserver = new IntersectionObserver(scrollCallback);
  scrollObserver.observe(document.getElementById("target-2"));
}