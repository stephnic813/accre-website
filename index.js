window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (scrollY > 1) {
    document.querySelector("header.header-home").style.height= "20vh";
    document.querySelector("header.header-home").style.flexDirection = "row";
    document.querySelector(".home-arrow-down").style.visibility = "hidden";
    document.querySelector(".launch-main-images").style.display = "none";
    document.querySelector("header.header-home .launch-main-title").style.fontSize = "2.2em";
    document.querySelector("header.header-home .launch-main-course").style.fontSize = "1.75em";
    document.querySelector("header.header-home .launch-main-quote").style.fontSize = "1.2em";
  } else {
    document.querySelector("header.header-home").style.height= "100vh";
    document.querySelector("header.header-home").style.flexDirection = "column";
    document.querySelector(".home-arrow-down").style.visibility = "visible";
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



