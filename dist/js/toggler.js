const navBar = document.getElementById("navbar__ul");
const lines = document.getElementById("hamburger").children;
const h1 = document.getElementById("showcase__h1");
const hamburger=document.getElementById("hamburger");
const posts = 
    [
        {
        title:"Thoughts on Web Dev", 
        publishIn:"May 16th, 2020", 
        filename:"webdev.html" 
        },
    {
        title:"Pink Floyd Cover", 
        publishIn:"May 24th, 2020", 
        filename:"wywh.html"
    }
    ]



const clickBurger = () => {
    navBar.classList.toggle("trigger__navbar")
    lines[0].classList.toggle("hamburger__line1")
    lines[1].classList.toggle("hamburger__line2")
    lines[2].classList.toggle("hamburger__line3")
    h1.classList.toggle("h1Vanisher");
    return //just tells the engine the process is over.
}

hamburger.onclick = clickBurger

const lastModified = (element) => {
    //this is supposing we didn't define Id, 
    //and there is a unique element with the class.
    let date = document.lastModified.split(" ")[0]
    //we don't want hour, minutes, seconds.
    document.getElementsByClassName(element)[0].innerHTML = "Last updated: " + date 
    return 
}

lastModified("topTagLine")

function updatePosts(posts){
    let ul = document.getElementsByClassName("newposts")[0].getElementsByTagName("ul")[0]
    ul.innerHTML=""
    if (posts.length>=4){
    for(let index=post.length-1; i>posts.length-4; i--)
    {
    let setStartDir=".."
    if(window.location.pathname.includes("dist/index.html")){
       setStartDir="."
    }
    ul.innerHTML += `
    <li><a href="${setStartDir}/post${index+1}/${posts[index].filename}">
    ${posts[index].publishIn}: ${posts[index].title}
    </a></li>\n
    `
        }
    )
        }
    else (posts.length<=3){
        posts.forEach( (item, index) =>
    {
    let setStartDir=".."
    if(window.location.pathname.includes("dist/index.html")){
       setStartDir="."
    }
    ul.innerHTML += `
    <li><a href="${setStartDir}/post${index+1}/${posts[index].filename}">
    ${posts[index].publishIn}: ${posts[index].title}
    </a></li>\n
    `
        }
    )

}
    
updatePosts(posts)
