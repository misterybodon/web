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



const posts = [
    {
        title:"Mr. Nobody: The Concept of Temperature",
        brief:"Mr. Nobody takes the thermometer into apart to answer. What is Temperature?",
        publishIn:"July 6th, 2020",
        folder:"post3"
    },
    {
        title:"Mr. Nobody: Pink Floyd Cover", 
        brief:"Guitar cover of Wish You Were Here By Mister Nobody",
        publishIn:"May 24th, 2020", 
        folder:"post2" //this isn't strictly necessary.
    }, {
        title:"Mr. Nobody: Thoughts on Web Dev", 
        brief:"Let's tell the story from the looser point of view. And Mr. Nobody comes in.",
        publishIn:"May 16th, 2020", 
        folder:"post1" //this isn't strictly necessary.
    }
        
    ]

//last posts first in the object.

const updatePosts = (posts) => {    
    //ul is a general name but will be function scoped.
    let ul = document.getElementsByClassName("newposts")[0].getElementsByTagName("ul")[0]
    ul.innerHTML=""
    let setStartDir=".."
    if(window.location.pathname.endsWith("dist/")){
        setStartDir="."
    }
    for (let i=0; i<5 && i<posts.length; i++)
    {       
    ul.innerHTML += `
    <li><a href="${setStartDir}/post${posts.length - i}/">
    ${posts[i].publishIn}: ${posts[i].title}
    </a></li>\n
    `
    }
    return 1
}

const setCurrentPostMetaTags = (posts) => {
    let metaProps = {
        page:{
            description:'meta[name="description"]'
        },
        og:{
            title:'meta[property="og:title"]', 
            description:'meta[property="og:description"]', 
            image:'meta[property="og:image"]'
        },
        twitter:{
            title:'meta[name="twitter:title"]'
        }
    }
for(let i = 0; i<posts.length; i++){
if(window.location.pathname.endsWith(`post${posts.length - i}`))
    {
        document.querySelector(metaProps.page.description).setAttribute("content", `${posts[i].title}`)
        console.log("updated")
        document.querySelector(metaProps.og.title).setAttribute("content", `${posts[i].title}`)
        console.log("updated")
        document.querySelector(metaProps.og.description).setAttribute("content", `${posts[i].brief}`)
        console.log("updated")
        document.querySelector(metaProps.og.image).setAttribute( "content", "../images/cartoon-min.jpg")
        console.log("updated")
        document.querySelector(metaProps.twitter.title).setAttribute("content", `${posts[i].title}`)
        console.log("updated")
        return 1
    }
}
return -1
}

updatePosts(posts)
setCurrentPostMetaTags(posts)
