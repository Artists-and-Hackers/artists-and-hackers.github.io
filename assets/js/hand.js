let width = window.innerWidth
let height = window.innerHeight

let body = document.querySelector('body')

let line = document.querySelector('section.header')


let title = document.querySelector('section.header div.title')
let rect = title.getBoundingClientRect()
let rectHeight = rect.bottom + rect.top
let subtitle = document.querySelector('section.header div.description')
let rect2 = title.getBoundingClientRect()
let rightSide = rect2.right

let hand


function preload() {
  hand = loadImage("assets/images/hand4.png");
}



function setup(){
  createCanvas(width, height);

  smooth();

}

function draw(){
  clear()

  noFill();
  strokeWeight(4);
  beginShape();
  vertex(rightSide + 32, rectHeight / 2);
  quadraticVertex(width / 3 * 2, rectHeight / 2, mouseX, mouseY);
  endShape();

  let diffX = (width / 3 * 2) - mouseX;
  let diffY = mouseY - 20;

  angle = Math.atan2(diffY, diffX)
  //console.log(an);

  // hand.style.transform = `translate(${mouseX}px,${mouseY}px)`
  push()
  angleMode(RADIANS)
  translate(mouseX, mouseY)
  rotate(-angle + radians(90));
  image(hand,-33,-25,66,103)
  pop()
}
