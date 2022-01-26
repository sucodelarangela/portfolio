//Effects on hover
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderOnScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('rolling')
  } else {
    header.classList.remove('rolling')
  }
}

//Back to top
const backToTop = document.querySelector('.back-to-top')

function showBackToTop() {
  if (window.scrollY >= 600) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

window.addEventListener('scroll', () => {
  changeHeaderOnScroll()
  showBackToTop()
})

//Toggle menu open
const nav = document.querySelector('nav')
const menuButton = document.querySelectorAll('.toggle')

for (const elem of menuButton) {
  elem.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

//Close menu when selecting
const menu = document.querySelectorAll('nav ul li a')

for (const item of menu) {
  item.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}
