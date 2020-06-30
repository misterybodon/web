const navBar = document.getElementById("navbar__ul");
const lines = document.getElementById("hamburger").children;
const h1 = document.getElementById("showcase__h1");
const hamburger=document.getElementById("hamburger");

const clickBurger = () => {
    navBar.classList.toggle("trigger__navbar")
    lines[0].classList.toggle("hamburger__line1")
    lines[1].classList.toggle("hamburger__line2")
    lines[2].classList.toggle("hamburger__line3")
    h1.classList.toggle("h1Vanisher");
}
hamburger.onclick = clickBurger
//// function clickBurger() {
//    navBar.classList.toggle("trigger__navbar")
//    lines[0].classList.toggle("hamburger__line1")
//    lines[1].classList.toggle("hamburger__line2")
//    lines[2].classList.toggle("hamburger__line3")
//    h1.classList.toggle("h1Vanisher");
//  }


