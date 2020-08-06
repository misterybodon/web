((element) => {
let date = document.lastModified.split(" ")[0]
document.querySelector(element).innerHTML = "Last updated: " + date 
})('.topTagLine')



