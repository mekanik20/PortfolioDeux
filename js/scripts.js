/**
 * Shows header when user scrolls up, hides header when user scrolls down */
/*var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-80px';
  }
  else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});*/

(function () {

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  const header = document.querySelector(".page-header");
  const headerHeight = header.offsetHeight;

  function checkScroll() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down */


    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  function toggleHeader(direction, curScroll) {
    if (direction === 2 && curScroll > headerHeight) {

      header.classList.add('nav-hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('nav-hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

})();

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


/**
 * Reveals sections on scrolling
 
(function () {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  reveal();

})();*/