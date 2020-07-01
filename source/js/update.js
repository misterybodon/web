const posts = 
    [
       {
            title:"Pink Floyd Cover", 
            publishIn:"May 24th, 2020", 
            filename:"wywh.html"
        },
        {
            title:"Thoughts on Web Dev", 
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
    if(window.location.pathname.endsWith("dist/index.html")){
        setStartDir="."
    }
    for (let i=0; i<5 && i<posts.length; i++)
    {       
    ul.innerHTML += `
    <li><a href="${setStartDir}/post${posts.length - i}/${posts[i].filename}">
    ${posts[i].publishIn}: ${posts[i].title}
    </a></li>\n
    `

    }
}
    updatePosts(posts)
