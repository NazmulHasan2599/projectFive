/*=============== SEARCH ===============*/
const searchBtn = document.getElementById('search__button'),
      searchBox = document.getElementById('search-content'),
      searchClose = document.getElementById('search__close');

searchBtn.addEventListener('click', ()=>{
    searchBox.classList.add('show__search')
})
searchClose.addEventListener('click', ()=>{
    searchBox.classList.remove('show__search')
})


/*=============== LOGIN ===============*/
const loginBtn = document.getElementById('login__button'),
      loginClose = document.getElementById('login__close'),
      loginContent = document.getElementById('login-content');

if(loginBtn){
    loginBtn.addEventListener('click', ()=>{
        loginContent.classList.add('show__login')
    })
}
if(loginClose){
    loginClose.addEventListener('click', ()=>{
        loginContent.classList.remove('show__login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = document.getElementById('header')

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY

    if(scroll >= 58){
        shadowHeader.classList.add('shadow__header')
    }else{
        shadowHeader.classList.remove('shadow__header')
    }
})

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoPlay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakPoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});
  
/*=============== FEATURED SWIPER ===============*/
  
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakPoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

  
    breakPoints: {
        1150: {
            slidesPerView: 3,
        }
    }
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

  
    breakPoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scroll__up')

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY

    if(scroll >= 350){
        scrollUp.classList.add('show-scroll')
    }else{
        scrollUp.classList.remove('show-scroll')
    }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll', ()=>{
    let scrollDown = window.scrollY

    section.forEach(sec =>{
        let sectionTop = sec.offsetTop - 58
        let sectionHeight = sec.offsetHeight
        let sectionId = sec.getAttribute('id')
        let sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if(scrollDown >= sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active__link')
        }else{
            sectionClass.classList.remove('active__link')
        }
    })
})
      

/*=============== DARK LIGHT THEME ===============*/ 
const themBtn = document.getElementById('theme__button');
const body = document.querySelector('.body');



themBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark-theme');

    if(body.classList.contains('dark-theme')){
        themBtn.className = 'ri-sun-line'
    }else{
        themBtn.className = 'ri-moon-line'
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

let sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true  // animation Repeat
  })
  sr.reveal(`.home__data, .featured__container, .testimonial__container, .join__data`)
  sr.reveal(`.home__images`, {delay: 600})
  sr.reveal(`.services__card, .section__title`, {interval: '100'})
  sr.reveal(`.discount__images`, {origin: 'left'})
  sr.reveal(`.discount__data`, {origin: 'right'})
  sr.reveal(`.new__card`, {interval: '100'})
  sr.reveal(`.footer__logo, .footer__description`, {origin: 'left'})
  sr.reveal(`.footer__data`, {origin: 'right'})
  sr.reveal(`.footer__copy`, {origin: 'bottom'})
