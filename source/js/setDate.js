const lastModified = (element) => {
//there is a unique element with the class.
let date = document.lastModified.split(" ")[0]
//we don't want hour, minutes, seconds.
document.getElementsByClassName(element)[0].innerHTML = "Last updated: " + date 
return 
}

lastModified("topTagLine")


