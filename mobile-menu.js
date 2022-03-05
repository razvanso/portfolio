let menu = document.getElementById('menu');
let button = document.getElementById('hamburger');
let buttonClose = document.getElementById('hamburger-close');

button.addEventListener('click', e => {
  console.log('click');

  menu.classList.add('visible-menu');
  menu.classList.remove('hidden');

});
