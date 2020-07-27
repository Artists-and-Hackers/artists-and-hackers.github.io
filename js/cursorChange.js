var images = [
  'assets/hand1.png',
  'assets/hand2.png',
  'assets/hand3.png',
  'assets/hand4.png',
  'assets/hand5.png',
  'assets/hand6.png',
];

var x = 0;

function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.body.style.cursor = 'url("' + images[x] + '"), default';
}

document.addEventListener("mousemove", function() {
  if (mouseX < window.innerWidth / 6) {
    document.body.style.cursor = 'url("' + images[0] + '") 60 35, default';
  }
  if (mouseX < (window.innerWidth / 6) * 2 && mouseX > window.innerWidth / 6) {
    document.body.style.cursor = 'url("' + images[1] + '") 50 25, default';
  }
  if (mouseX < (window.innerWidth / 6) * 3 && mouseX > (window.innerWidth / 6) * 2) {
    document.body.style.cursor = 'url("' + images[2] + '") 40 25, default';
  }
  if (mouseX < (window.innerWidth / 6) * 4 && mouseX > (window.innerWidth / 6) * 3) {
    document.body.style.cursor = 'url("' + images[3] + '") 31 25, default';
  }
  if (mouseX < (window.innerWidth / 6) * 5 && mouseX > (window.innerWidth / 6) * 4) {
    document.body.style.cursor = 'url("' + images[4] + '") 31 25, default';
  }
  if (mouseX < (window.innerWidth / 6) * 6 && mouseX > (window.innerWidth / 6) * 5) {
    document.body.style.cursor = 'url("' + images[5] + '") 31 25, default';
  }
})
