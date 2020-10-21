let navbar = document.querySelector("section.navbar div.nav")
let nav = document.querySelectorAll("section.navbar nav")
let tools = document.querySelector("div.tags")


let scrol
let toolBox = tools.getBoundingClientRect()

document.addEventListener("scroll", function(){
  scrol = window.pageYOffset + (window.innerHeight / 2)
  if (window.innerWidth > 800) {
    if (scrol > toolBox.bottom) {
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

  }






})
