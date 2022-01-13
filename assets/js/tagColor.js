let tagH5 = document.querySelectorAll("h5.tag")

// for tag color
let red = "#E7511C"
let blue = "#5584A4"
let yellow = "#FECC2F"
let green = "#35AC7D"

tagH5.forEach((tag, i) => {
  if (i % 4 == 0) {
    tag.style.color = red
    console.log("hello");
  } else if (i % 4 == 1){
    tag.style.color = blue
  } else if(i % 4 == 2){
    tag.style.color = yellow
  } else if(i % 4 == 3){
    tag.style.color = green
  }
});
