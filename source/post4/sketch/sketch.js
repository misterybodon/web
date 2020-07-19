//Canvas Text-filler

//VARIABLES
//canvas dimensions
let x=600, y=600;
let fontI, fontM
let randomSize
let myXval=x, myYval=y;//draw rendered in full canvas
//text filling up the canvas
let fillString
//all our colors, for different purposes.
let myColors = {"brown": [255,225,25,100]}

//FUNCTION DEFS.  
let fillWithText = (
    x=myXval, 
    y=myYval, 
    fontI=10,
    fontM=32,
    fillString="Hello World!") => {

randomX = random(x)
randomY = random(y)
randomSize = random(fontI, fontM)
textAlign(CENTER,CENTER)
textSize(randomSize)
fill(...myColors.brown)
text(fillString, randomX, randomY)

}

// black canvas, not so high frameRate
function setup() {
createCanvas(x, y)
background(0)
frameRate(10);
}
//draw the text in a random position inside the canvas, and with a random font-size between 10 and 32 pixels
function draw(){
fillWithText()
}

