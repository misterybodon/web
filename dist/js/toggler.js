const navBar = document.getElementById("navbar__ul")
const lines = document.getElementById("hamburger").children
const cardH2Chevron=document.getElementById("card__h2chevron");
const wrapper=document.getElementById("card__wrapper")
const rotateImage=document.getElementById("card__rotateImage")

function clickBurger() {
    navBar.classList.toggle("trigger__navbar")
    toggleH1()
    lines[0].classList.toggle("hamburger__line1")
    lines[1].classList.toggle("hamburger__line2")
    lines[2].classList.toggle("hamburger__line3")
  }

function showCard(){
wrapper.classList.toggle("card__wrapper--fullHeight")
cardH2Chevron.classList.toggle("card__h2chevron--close")
}
function rotateCardImage(){
    rotateImage.classList.toggle("card__rotateImage")
}


function toggleH1() {
const h1 = document.getElementById("showcase__h1");
h1.classList.toggle("h1Vanisher");
}
