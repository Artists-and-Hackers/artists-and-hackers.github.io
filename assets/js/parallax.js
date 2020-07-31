let computer = document.querySelectorAll("div.computer img")
let dial = document.querySelectorAll("div.dial img")

let scroll

document.addEventListener("scroll", function(){
  //for 800PX
  function changeScroll(x) {
    if (x.matches) {
      scroll = window.pageYOffset * .3
    } else {
      scroll = window.pageYOffset * .2
      }
  }

  computer.forEach(tag => {
    //console.log(scroll);
    tag.style.transform = `translate(0,${scroll}px)`;
    //console.log((scroll));
  })
  //for 800PX
  var x = window.matchMedia("(max-width: 800px)")
  changeScroll(x) // Call listener function at run time
  x.addListener(changeScroll)
  //for 600px
  // var y = window.matchMedia("(max-width: 600px)")
  // changeScroll(y) // Call listener function at run time
  // y.addListener(changeScroll)
})

document.addEventListener("scroll", function(){
  //for 800PX
  function changeScroll(x) {
    if (x.matches) { // If media query matches
      scroll = window.pageYOffset * .5
    } else {
      scroll = window.pageYOffset * .3
      }
  }

  dial.forEach(tag => {
    //console.log(scroll);
    tag.style.transform = `translate(0,${scroll}px)`;
    //console.log((scroll));
  })
  //for 800PX
  var x = window.matchMedia("(max-width: 800px)")
  changeScroll(x) // Call listener function at run time
  x.addListener(changeScroll)

})
