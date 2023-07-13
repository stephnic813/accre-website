window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
    document.querySelector(".launch-main-title").style.fontSize = "2.5em";
    document.querySelector(".launch-main-course").style.fontSize = "2.15em";
    document.querySelector(".launch-main-quote").style.fontSize = "1.5em";
  } else {
    
    document.querySelector(".launch-main-title").style.fontSize = "3em";
    document.querySelector(".launch-main-course").style.fontSize = "2.6em";
    document.querySelector(".launch-main-quote").style.fontSize = "2em";  
  }
}
