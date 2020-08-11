let underline = document.querySelectorAll('a.face')
let popup = document.querySelector('div.popup')


function draw(){
underline.forEach(tag => {
    let rect = tag.getBoundingClientRect()
    if (mouseX > rect.left && mouseX < rect.right && mouseY < rect.bottom && mouseY > rect.top) {
      let face
      console.log("Hello");
      if (tag.id == "Lee") {
        face = "url('{{site.baseurl}}/assets/images/lee.png')"
        console.log("lee");
      }
      if (tag.id == "Maya") {
        face = "url('{{site.baseurl}}/assets/images/maya.png')"
      }
      if (tag.id == "Caleb") {
        face = "url('{{site.baseurl}}/assets/images/caleb.png')"
      }
      popup.style.backgroundImage = face
    } else {
      //popup.style.backgroundImage = "url('')"
      tag.style.color = "black"

    }
  })
}
