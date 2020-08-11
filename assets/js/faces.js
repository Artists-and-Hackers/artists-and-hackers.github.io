let link = document.querySelectorAll('a.face')
let popup = document.querySelector('div.popup')

link.forEach((tag) => {
  tag.addEventListener("mouseover", function(){
    let face

    if (tag.id == "Lee") {
      face = "url('assets/images/lee.png')"
    }
    else if (tag.id == "Maya") {
      face = "url('assets/images/maya.png')"
    }
    else if (tag.id == "Caleb") {
      face = "url('assets/images/caleb.png')"
    }

    popup.style.backgroundImage = face
  })
  tag.addEventListener("mouseout", function(){
    popup.style.backgroundImage = ""
  })
});
