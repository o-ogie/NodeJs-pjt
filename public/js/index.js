const   slides = document.querySelector('#slides')
        slide = document.querySelectorAll('#slides > li')
        prevBtn = document.querySelector('#prev')
        nextBtn = document.querySelector('#next')

let currentIndex = 0
    slideCount = slide.length
    slideWidth = 1200
    slideMargin = 30
    timer = undefined


    console.log(slides, slide, prevBtn, nextBtn)

const makeClone = () => {

    for ( let i =0; i<slideCount; i++){
        const cloneSlide = slide[0].cloneNode(true)
        cloneSlide.classList.add = 'clone'
        slides.appendChild(cloneSlide)
    }

    for (let i=slideCount-1; i>=0; i--){
        const cloneSlide = slide[i].cloneNode(true)
        cloneSlide.classList.add = 'clone'
        slides.prepend(cloneSlide)
    }
    updateWidth()
    setInitaulpos()

    setTimeout(()=>{
        slides.classList.add('animated')
    },100)
    

}

const updateWidth = () => {
    const   currentSlides = document.querySelectorAll('#slides > li')
            newSlideCount = currentSlides.length
            newWidth = `${(slideWidth + slideMargin) * newSlideCount - slideMargin}px`

    slides.style.width = newWidth
}

const setInitaulpos = () => {
    const TranslateValue = -(slideWidth + slideMargin)* slideCount
    slides.style.transform = `translateX(${TranslateValue}px)`
}

nextBtn.addEventListener('click', ()=>{
    moveSlide(currentIndex+1)
    stopSlide()
    autoSlide()
})
prevBtn.addEventListener('click', ()=>{
    moveSlide(currentIndex-1)
    stopSlide()
    autoSlide()
})

const moveSlide = (num) => {
    slides.style.left = `${-(slideWidth + slideMargin) * num}px`
    currentIndex = num
    
    if ( currentIndex === slideCount || currentIndex === -slideCount){
        setTimeout(()=>{
            slides.classList.remove('animated')
            slides.style.left = '0px'
            currentIndex = 0
            
        },600)

    }
    slides.classList.add('animated')
}



const autoSlide = () => {
    timer = setInterval(()=>{
        moveSlide(currentIndex+1)
    }, 2000)
}

const stopSlide = () => {
    clearInterval(timer)
}

makeClone()
autoSlide()

// ------------------------------------------------------------
const targets_l = document.querySelectorAll(".fade-class-left")
const targets_r = document.querySelectorAll(".fade-class-right")
const options = { root: null, threshold: 0.1, rootMargin: "-0px" }
const observer_l = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target;
        if (entry.isIntersecting) {
            container.classList.add("fade-in-left")
        } else {
            container.classList.remove("fade-in-left")
        }
    });
}, options)

targets_l.forEach((target) => {
    observer_l.observe(target)
})

const observer_r = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        const container = entry.target
        if (entry.isIntersecting) {
            container.classList.add("fade-in-right")
        } else {
            container.classList.remove("fade-in-right")
        }
    })
}, options)

targets_r.forEach((target) => {
    observer_r.observe(target)
})

//---------------------------------------

const community = document.querySelector('#community')


const commuHandler = (e) => {
    e.preventDefault()
    cookie = document.cookie === ''
    console.log(cookie)
    if (cookie) {
        alert('로그인이 필요한 컨텐츠입니다.')
        e.preventDefault();
        return
    }
    location.href='/board/list'
}

community.addEventListener('click',commuHandler)