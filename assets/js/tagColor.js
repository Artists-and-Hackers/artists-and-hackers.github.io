let tag = document.querySelectorAll("h5.tag")


let red = "#E7511C"
let blue = "#5584A4"
let yellow = "#FECC2F"
let green = "#35AC7D"


tag.forEach(item =>{
  tagType = item.innerText

  switch(tagType) {
    case "Esolangs":
      item.style.color = red
      break;
    case "Computing History":
      item.style.color = blue
      break;
    case "Livecoding":
      item.style.color = yellow
      break;
    case "Coding Languages":
      item.style.color = green
      break;
    case "Activism":
      item.style.color = red
      break;
    case "Tools": 
      item.style.color = blue
      break;
    case "Algorithmic Inequality":
      item.style.color = yellow
      break;
    case "Digital Commons":
      item.style.color = green;
      break;
    case "Alternative Networks":
      item.style.color = red;
      break;
    default:
  } 


})
