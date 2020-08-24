let navbar = document.querySelector("section.navbar")
let nav = document.querySelectorAll("section.navbar nav")
let tools = document.querySelector("div.tools-discussed")


let scroll
let toolBox = tools.getBoundingClientRect()

document.addEventListener("scroll", function(){
  scroll = window.pageYOffset + (window.innerHeight / 2)

  if (scroll > toolBox.bottom) {
    navbar.style.left = " "
    navbar.style.flexDirection = "column"
    navbar.style.alignItems = "flex-end"

    nav.forEach(tag => {
      tag.style.marginTop = "1vw"
    })
  }else {
    navbar.style.left = "0px"
    navbar.style.flexDirection = "row"
    navbar.style.alignItems = "center"

    nav.forEach(tag => {
      tag.style.marginTop = " "
    })
  }




})
