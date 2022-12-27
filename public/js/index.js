const qck_btn = document.querySelector('#qck_btn:after')
const qck_menu = document.querySelector('.qck_menu')

const qckHandler = () => {
    qck_menu.classList.toggle('hide')
}

qck_btn.addEventListener('click', qckHandler)