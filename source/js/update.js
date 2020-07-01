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


function updatePosts(posts){
    let ulPosts = document.getElementsByClassName("newposts")[0].getElementsByTagName("ul")[0]
    ulPosts.innerHTML=""
    let setStartDir=".."
    if(window.location.pathname.includes("dist/index.html")){
        setStartDir="."
    }
    if (posts.length>=4){
        //we don't want more than 4 'new posts' in the list.
        //posts to be ordered from newer to older.
        for(let index=post.length-1; index>posts.length-5; index--)

        {
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
                    ul.innerHTML += `
    <li><a href="${setStartDir}/post${index+1}/${posts[index].filename}">
    ${posts[index].publishIn}: ${posts[index].title}
    </a></li>\n
    `
            }
        )

    }

    updatePosts(posts)
