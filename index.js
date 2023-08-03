/* Execute on start */
function onStart() {
  checkIsInHome();
  goBackTopBtn.addEventListener('click',() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200)
  });
  headerArrowBtn.addEventListener("click", () => {
    window.scrollTo(0, 0.7);
  })
  
  
}

/* Determine if current page is home page or not */
function checkIsInHome() {
  if (!headerHome) {
    isInHome = false;
    EnableGoBackToTop();
    return;
  }
  window.addEventListener("scroll", scrollFunction);
}

let isInHome = true;
const headerHome = document.querySelector("header.header-home");
const headerArrow = document.querySelector(".home-arrow-down");
const headerArrowBtn = headerArrow.parentElement;
// const header
const headerImages = document.querySelector(".launch-main-images");
const headerWelcomeMsg = document.querySelector(".launch-main-welcome"); 
const headerTitle = document.querySelector("header.header-home .launch-main-title");
const headerCourse = document.querySelector("header.header-home .launch-main-course");
const headerQuote = document.querySelector("header.header-home .launch-main-quote");

function scrollFunction() {
  if (scrollY > 0.7 && headerHome) {
    headerHome.style.height = "20vh";
    headerHome.style.flexDirection = "row";
    headerArrow.style.visibility = "hidden";
    headerArrowBtn.style.visibility = "hidden";
    hamburgerBtn.style.alignSelf = "center";
    headerImages.style.display = "none";
    headerWelcomeMsg.style.display = "none";
    headerTitle.style.fontSize = "1.5em";
    headerCourse.style.fontSize = "1.25em";
    headerQuote.style.fontSize = "1em";
    setTimeout(EnableGoBackToTop, 500);
    isInHome === true;
  } 
  /* NOTE: Code to full screen header (launch page) */
  // else if (scrollY > 5 && headerHome) {
    //   if (headerHome) headerHome.style.height = "100vh";
    //   if (headerHome) headerHome.style.flexDirection = "column";
    //   if (headerArrow) headerArrow.style.visibility = "visible";
    // headerArrow.parentElement.tabIndex = 0;
    // headerArrow.parentElement.disabled = "false";
    // hamburgerBtn.style.alignSelf = "start";
  //   if (headerImages) headerImages.style.display = "flex";
  //   if (headerWelcomeMsg) headerWelcomeMsg.style.display = "block";
  //   if (headerTitle) headerTitle.style.fontSize = "3em";
  //   if (headerCourse) headerCourse.style.fontSize = "2.6em";
  //   if (headerQuote) headerQuote.style.fontSize = "2em";
  // }
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



/* Go back to top */
const goBackTopBtn = document.querySelector(".go-back-top-btn");
/* Start listening to scroll height to to show go to top btn */
function EnableGoBackToTop() {
  checkScrollHeight();
  window.addEventListener("scroll", checkScrollHeight);
}

/* Show or hide go to top btn depending on scroll height*/
function checkScrollHeight() {
  let isShown = goBackTopBtn.classList.contains("show");
  let scrollHeight = window.scrollY;

  if (scrollHeight > 150 && !isShown) {
    goBackTopBtn.classList.add("show");
    goBackTopBtn.classList.remove("hide");
  }
  else if (scrollHeight <= 150 && isShown) {
    goBackTopBtn.classList.add("hide");
    goBackTopBtn.classList.remove("show");
  }
}






onStart();
