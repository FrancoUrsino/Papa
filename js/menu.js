// const menuBtn = document.querySelector('#menuBtn');

// menuBtn.addEventListener('click', function (menu) {
//   document.querySelector('body').classList.toggle('MobileNavOpen');
//   this.classList.toggle('fa-xmark')
// })
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const togglerNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active")
}

addEventOnElements(navTogglers, "click", togglerNav)
