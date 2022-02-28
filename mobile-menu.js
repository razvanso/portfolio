let menu = document.getElementById('menu')
let button = document.getElementById('hamburger')

button.addEventListener('click', e => {
  console.log('click')

  menu.classList.add('visible-menu')
  menu.classList.remove('hidden')
})
