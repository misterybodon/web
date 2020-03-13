const navBar = document.getElementById("navbar__ul")
const lines = document.getElementById("hamburger").children
function clickBurger() {
    navBar.classList.toggle("trigger__navbar")
    lines[0].classList.toggle("hamburger__line1")
    lines[1].classList.toggle("hamburger__line2")
    lines[2].classList.toggle("hamburger__line3")
  }
