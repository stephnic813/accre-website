window.onscroll = function() {scrollFunction()};

const headerHome = document.querySelector("header.header-home");
const headerArrow = document.querySelector(".home-arrow-down");
const headerImages = document.querySelector(".launch-main-images");
const headerWelcomeMsg = document.querySelector(".launch-main-welcome"); 
const headerTitle = document.querySelector("header.header-home .launch-main-title");
const headerCourse = document.querySelector("header.header-home .launch-main-course");
const headerQuote = document.querySelector("header.header-home .launch-main-quote");
// let isTransitionOngoing = false;


function scrollFunction() {
  if (scrollY > 0.7 && headerHome) {
    if (headerHome) headerHome.style.height = "20vh";
    if (headerHome) headerHome.style.flexDirection = "row";
    if (headerArrow) headerArrow.style.visibility = "hidden";
    if (headerImages) headerImages.style.display = "none";
    if (headerWelcomeMsg) headerWelcomeMsg.style.display = "none";
    if (headerTitle) headerTitle.style.fontSize = "1.5em";
    if (headerCourse) headerCourse.style.fontSize = "1.25em";
    if (headerQuote) headerQuote.style.fontSize = "1em";
    isTransitionOngoing = true;
    setTimeout(EnableGoBackToTop, 500);

  } else if (scrollY > 5 && headerHome) {
    if (headerHome) headerHome.style.height = "100vh";
    if (headerHome) headerHome.style.flexDirection = "column";
    if (headerArrow) headerArrow.style.visibility = "visible";
    if (headerImages) headerImages.style.display = "flex";
    if (headerWelcomeMsg) headerWelcomeMsg.style.display = "block";
    if (headerTitle) headerTitle.style.fontSize = "3em";
    if (headerCourse) headerCourse.style.fontSize = "2.6em";
    if (headerQuote) headerQuote.style.fontSize = "2em";
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



/* Go back to top btn */

const goBackTopBtn = document.querySelector(".go-back-top-btn");
let isShown = false;

function EnableGoBackToTop() {
  document.addEventListener("scroll", () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100 && !isShown) {
      goBackTopBtn.classList.toggle("show");
      goBackTopBtn.classList.toggle("hide");
      isShown = true;
    }
    else if (document.documentElement.scrollTop <= 100 && isShown) {
      goBackTopBtn.classList.toggle("hide");
      goBackTopBtn.classList.toggle("show");
      isShown = false;
    }

  });
}



