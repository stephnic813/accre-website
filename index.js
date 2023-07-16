window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (scrollY > 1) {
    document.querySelector("header.header-home").style.height= "20vh";
    document.querySelector("header.header-home").style.flexDirection = "row";
    document.querySelector(".home-arrow-down").style.display = "none";
    document.querySelector(".launch-main-images").style.display = "none";
    document.querySelector("header.header-home .launch-main-title").style.fontSize = "2.2em";
    document.querySelector("header.header-home .launch-main-course").style.fontSize = "1.75em";
    document.querySelector("header.header-home .launch-main-quote").style.fontSize = "1.2em";
  } else {
    document.querySelector("header.header-home").style.height= "100vh";
    document.querySelector("header.header-home").style.flexDirection = "column";
    document.querySelector("header.header-home > .home-arrow-down").style.display = "block";
    document.querySelector(".launch-main-images").style.display = "flex";
    document.querySelector("header.header-home .launch-main-title").style.fontSize = "3em";
    document.querySelector("header.header-home .launch-main-course").style.fontSize = "2.6em";
    document.querySelector("header.header-home .launch-main-quote").style.fontSize = "2em";  
  }
}

/* Show or collapse sidebar (nav) */
const nav = document.querySelector("nav");
const hamburgerBtn = document.querySelector("header > button:first-child");

document.addEventListener("click", (event) => {
  if (hamburgerBtn.contains(event.target) || 
      nav.contains(event.target)) {
    showNav();
  }
  else if (nav.classList.contains("nav-slide-in")) {
    collapseNav();
  }
});

const showNav = function() {
  nav.classList.add("nav-slide-in");
  nav.classList.remove("nav-slide-out");
};

const collapseNav = function() {
  nav.classList.add("nav-slide-out");
  nav.classList.remove("nav-slide-in");
};

// Extension and Community Carousel
var swiper = new Swiper('.swiper-container',{
  pagination: '.swiper-pagination',
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow:{
    rotate:20,
    stretch:0,
    depth:200,
    modifier:1,
    slideShadows:true,
  },
  // loop:true,
});

async function fetchContents() {
  const response = await fetch('./extension-community.json')
  const fetchSlideshow = await response.json();
  console.log(fetchSlideshow)
}

fetchContents()

//Perfomance-Graduates Carousel
const swiperEl = document.querySelector('graduates-slider')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
swiperEl.initialize();