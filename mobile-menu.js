let menu = document.getElementById('menu');
let button = document.querySelector('.toggle-icon');
let menuItems = document.querySelectorAll('.menu li');

button.addEventListener('click', e => {
  button.classList.toggle('active');
  menu.classList.toggle('active');
});

