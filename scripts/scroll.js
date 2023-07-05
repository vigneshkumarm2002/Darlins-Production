var wrapperMenu = document.querySelector('.wrapper-menu');
var lineMenu = document.getElementById('menu-line')
var lineMenus = document.querySelectorAll('.line-menu');
var menuOverlay = document.getElementById('menu-overlay');


wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');
  menuOverlay.classList.toggle('active');
  lineMenus.forEach(function(line) {
    line.classList.toggle('open');
  });
  lineMenu.classList.toggle('change');
  
})



window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  var scrolled = window.scrollY > 0;
  navbar.classList.toggle('transparent', !scrolled);
  navbar.classList.toggle('scrolled', scrolled);
});