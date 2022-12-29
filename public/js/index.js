const kindWrap =  document.querySelector('.kind_wrap')
const slider = document.querySelector('.slider')
const slideLis = document.querySelectorAll('li')
const moveButton = document.querySelector('.arrow')


const clone1 = slideLis[0].cloneNode(true)
const cloneLast = slideLis[slideLis.length - 1].cloneNode(true)
slider.insertBefore(cloneLast, slideLis[0])
slider.appendChild(clone1)


let currentIdx = 0
let translate = 0
const speedTime = 500


const sliderCloneLis = slider.querySelectorAll('li')
const liWidth = slideLis[0].clientWidth
const sliderWidth = liWidth * sliderCloneLis.length
slider.style.width = `${sliderWidth}px`
currentIdx = 1
translate = -liWidth
slider.style.transform = `translateX(${translate}px)`


moveButton.addEventListener('click', moveSlide)


function move(D) {
    currentIdx += (-1 * D)
    translate += liWidth * D
    slider.style.transform = `translateX(${translate}px)`
    slider.style.transition = `all ${speedTime}ms ease`
}


function moveSlide(event) {
    event.preventDefault()
    if (event.target.className === 'next') {
    move(-1)
    if (currentIdx === sliderCloneLis.length -1)
        setTimeout(() => {
        slider.style.transition = 'none'
        currentIdx = 1
        translate = -liWidth
        slider.style.transform = `translateX(${translate}px)`
        }, speedTime)
    } else {
        move(1)
        if (currentIdx === 0) {
        setTimeout(() => {
            slider.style.transition = 'none'
            currentIdx = sliderCloneLis.length -2
            translate = -(liWidth * currentIdx)
            slider.style.transform = `translateX(${translate}px)`
        }, speedTime)
        }
    }
}

function sliding() {
    move(-1)
    if (currentIdx === sliderCloneLis.length -1)
        setTimeout(() => {
            slider.style.transition = 'none'
            currentIdx = 1
            translate = -liWidth
            slider.style.transform = `translateX(${translate}px)`
        }, speedTime)
    }

function showSliding() {
    setInterval(sliding, 2000)
}

showSliding()


const targets_l = document.querySelectorAll(".fade-class-left")
const targets_r = document.querySelectorAll(".fade-class-right")
const options = { root: null, threshold: 0.1, rootMargin: "-0px" }
const observer_l = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
            container.classList.add("fade-in-left");
        } else {
            container.classList.remove("fade-in-left");
        }
    });
}, options)

targets_l.forEach((target) => {
    observer_l.observe(target);
})

const observer_r = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
            container.classList.add("fade-in-right");
        } else {
            container.classList.remove("fade-in-right");
        }
    });
}, options)

targets_r.forEach((target) => {
    observer_r.observe(target);
})