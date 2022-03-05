const menu = document.getElementById('menu');
const button = document.querySelector('.toggle-icon');
const menuItems = document.querySelectorAll('#menu li');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  menu.classList.toggle('active');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    button.classList.remove('active');
    menu.classList.remove('active');
  });
});
