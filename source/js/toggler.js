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
    return //just tells the engine the process is over.
}

hamburger.onclick = clickBurger

////toggler for p5 iframes

p5Frames = [
                {
                    id:"p5IFrame1", 
                    source:"./sketch/p5IFrame1.html", 
                    blackCanvas:"./sketch/black1.html",
                    sourcePhones:"./sketch/phones/p5IFrame1.html",
                    blackCanvasPhones:"./sketch/phones/black1.html"
                }, 
                {id:"p5IFrame2", source:"./sketch/p5IFrame2.html"}, 
                {id:"p5IFrame3", source:"./sketch/p5IFrame3.html"}, 
           ]
//listens for a click on a button tag
window.onclick = e => {
   e.target.tagName == "BUTTON"
    && setSource(e.target, p5Frames)
    } 
function setSource(button, array){
let iframe = button.parentElement.nextElementSibling;
for (let i=0; i<array.length; i++){
    console.log("executing setSource")
    if(array[i].id == iframe.id){
        if(window.innerWidth<600){
                iframe.parentElement.classList +=" runCode__smallScreen";
                iframe.classList +=" iframe__smallScreen";
            if(button.classList[0]== "runCode__run"){
                iframe.src = array[i].sourcePhones
                            }
            else{iframe.src=array[i].blackCanvasPhones}
    }
        else{
            iframe.parentElement.classList +=" runCode__largeScreen";
            iframe.classList +=" iframe__largeScreen";
            if(button.classList[0]== "runCode__run"){
                iframe.src = array[i].source
            }
            else{iframe.src=array[i].blackCanvas}
    }
  }
}
return -1
}
//get Iframe element
