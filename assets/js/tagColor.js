let tag = document.querySelectorAll("h5.tag")


let red = "#E7511C"
let blue = "#5584A4"
let yellow = "#FECC2F"
let green = "#35AC7D"


tag.forEach(item =>{
  tagType = item.innerText

  if (tagType == "Esolangs") {
    item.style.color = red
  }
  if (tagType == "Computing History") {
    item.style.color = blue
  }
  if (tagType == "Livecoding") {
    item.style.color = yellow
  }
  if (tagType == "Coding Languages") {
    item.style.color = green
  }
})
