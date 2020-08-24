//for tags
let subject = document.querySelector("select.type")
let tool = document.querySelectorAll("section.tool")


//for tags
subject.addEventListener("change", function(){
  let selected = subject.value
  tool.forEach(tag => {

    //All Subjects
    if (selected == "") {
      tag.style.display = "flex"
      console.log(tag.classList.contains('tool'));
    }

    //Livecoding
    if (selected == "Livecoding") {
      if (tag.classList.contains('livecoding')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('livecoding') == false) {
        tag.style.display = "none"
      }
    }

    //Technological Criticality
    if (selected == "Technological Criticality") {
      console.log(tag.classList);
      if (tag.classList.contains('technological_criticality')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('technological_criticality') == false) {
        tag.style.display = "none"
      }
    }

  });

})
