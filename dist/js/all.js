const lastModified = (element) => {
//there is a unique element with the class.
let date = document.lastModified.split(" ")[0]
//we don't want hour, minutes, seconds.
document.getElementsByClassName(element)[0].innerHTML = "Last updated: " + date 
return 
}

lastModified("topTagLine")



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



const posts = 
    [
       {
            title:"Pink Floyd Cover", 
            publishIn:"May 24th, 2020", 
            filename:"wywh.html"
        },
        {
            title:"Thoughts", 
            publishIn:"May 16th, 2020", 
            filename:"webdev.html" 
        }
        
    ]

//last posts first in the object.

const updatePosts = (posts) => {    
    //ul is a general name but will be function scoped.
    let ul = document.getElementsByClassName("newposts")[0].getElementsByTagName("ul")[0]
    ul.innerHTML=""
    let setStartDir=".."
<<<<<<< HEAD
    if(window.location.pathname.endsWith("dist/index.html")){
        setStartDir=."
=======
    if(window.location.pathname.endsWith("dist/")){
        setStartDir="."
>>>>>>> newjsupdate
    }
    for (let i=0; i<5 && i<posts.length; i++)
    {       
    ul.innerHTML += `
    <li><a href="${setStartDir}/post${posts.length - i}/${posts[i].filename}">
    ${posts[i].publishIn}: ${posts[i].title}
    </a></li>\n
    `
    }
    return 1
}
    updatePosts(posts)
