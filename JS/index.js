burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')


burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav')
    rightnav.classList.toggle('v-class')
    navList.classList.toggle('v-class')
})
