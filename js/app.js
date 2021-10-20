

const header = document.querySelector('header')
const logoChange = document.querySelector('.js-header a img')

function menuFixo(){
    if (window.scrollY > 200) {
        header.classList.add('active_header')
        logoChange.setAttribute('src', './assets/logo-black.svg')

    } else {
        header.classList.remove('active_header')
        logoChange.setAttribute('src', './assets/logo-white.svg')
    }
}

window.addEventListener('scroll', menuFixo)
