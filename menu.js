let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile1')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
  menu.classList.add('menu-mobile1')
})

menu.addEventListener('click', () => {
  menu.classList.remove('menu-mobile1')
})

overlay.addEventListener('click', () => {
  menu.classList.remove('menu-mobile1')
})

