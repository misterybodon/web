const posts = [
    {
        title:"Mr. Nobody: The p5.js Library",
        brief:"Mr. Nobody jumps right into Art!",
        publishIn:"July 21th, 2020",
        folder:"post4"
    }, {
        title:"Mr. Nobody: The Concept of Temperature",
        brief:"Mr. Nobody takes the thermometer into apart to answer. What is Temperature?",
        publishIn:"July 6th, 2020",
        folder:"post3"
    },
    {
        title:"Mr. Nobody: Pink Floyd Cover", 
        brief:"Guitar cover of Wish You Were Here By Mister Nobody",
        publishIn:"May 24th, 2020", 
        folder:"post2" 
    }, {
        title:"Mr. Nobody: Thoughts on Web Dev", 
        brief:"Let's tell the story from the looser point of view. And Mr. Nobody comes in.",
        publishIn:"May 16th, 2020", 
        folder:"post1"
    }
] //last posts first in the object.

const metaProps = {
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
const updatePosts = (posts) => {    
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
const setMeta=(filename, metaProps, posts)=>{
    const finder=/post\d+/;
    const post = filename.match(finder) 
    if(post){
        const findnumber = /\d+/;
        const number = String(post).match(findnumber)
        const postData = posts[posts.length - number]
        const {title, brief} = postData
        const {og, page, twitter:tw} = metaProps
        document.querySelector(page.description).setAttribute("content", `${title}`)
        document.querySelector(og.title).setAttribute("content", `${title}`)
        document.querySelector(og.description).setAttribute("content", `${brief}`)
        document.querySelector(og.image).setAttribute( "content", "../images/ben-min.jpg")
        document.querySelector(tw.title).setAttribute("content", `${title}`)
    }
}

updatePosts(posts)

setMeta(window.location.pathname, metaProps, posts)
