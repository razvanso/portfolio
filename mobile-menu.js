let menu = document.getElementById('menu');
let button = document.querySelector('.toggle-icon');
let menuItems = document.querySelectorAll('#menu li');

button.addEventListener('click', event => {
  button.classList.toggle('active');
  menu.classList.toggle('active');
});

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    console.log('hide');
    button.classList.remove('active');
    menu.classList.remove('active');
  });
});
