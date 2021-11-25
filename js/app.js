/* === FIXED MENU === */
const header = document.querySelector('header')
const logoChange = document.querySelector('.js-header a img')

function menuFixo(){
    if (window.scrollY > 200) {
        header.classList.add('active_header')

    } else {
        header.classList.remove('active_header')
    }
}

window.addEventListener('scroll', menuFixo)

/* === TOGGLE BUTTON === */
const btnToggle = document.querySelector('.js-toggle')

function slideBtn(event){
    event.preventDefault()
    btnToggle.classList.toggle('slide')
}

btnToggle.addEventListener('click', slideBtn)