window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (scrollY > 1) {
    document.querySelector("header").style.height= "20vh";
    document.querySelector("header").style.flexDirection = "row";
    document.querySelector(".home-arrow-down").style.display = "none";
    document.querySelector(".launch-main-title").style.fontSize = "2.2em";
    document.querySelector(".launch-main-course").style.fontSize = "1.75em";
    document.querySelector(".launch-main-quote").style.fontSize = "1.2em";
  } else {
    document.querySelector("header").style.height= "100vh";
    document.querySelector("header").style.flexDirection = "column";
    document.querySelector(".home-arrow-down").style.display = "block";
    document.querySelector(".launch-main-title").style.fontSize = "3em";
    document.querySelector(".launch-main-course").style.fontSize = "2.6em";
    document.querySelector(".launch-main-quote").style.fontSize = "2em";  
  }
}

