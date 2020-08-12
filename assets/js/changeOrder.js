//for chronology
let list = document.getElementById("list")
let order = document.querySelector("select.order")

//for tags
let subject = document.querySelector("select.subject")
let episode = document.querySelectorAll("section.episode")

//for chronology
order.addEventListener("change", function(){
  let selected = order.value
  if (selected == "Oldest First") {
    list.style.flexDirection = "column-reverse"
  }
  if (selected == "Newest First") {
    list.style.flexDirection = "column"
  }
})

//for tags
subject.addEventListener("change", function(){
  let selected = subject.value
  episode.forEach(tag => {

    //All Subjects
    if (selected == "") {
      tag.style.display = "grid"
      console.log(tag.classList.contains('technological_criticality'));
    }

    //Livecoding
    if (selected == "Livecoding") {

      if (tag.classList.contains('livecoding')) {
        tag.style.display = "grid"
      }
      if (tag.classList.contains('livecoding') == false) {
        tag.style.display = "none"
      }

    }

    //Technological Criticality
    if (selected == "Technological Criticality") {
      console.log(tag.classList);
      if (tag.classList.contains('technological_criticality')) {
        tag.style.display = "grid"
      }
      if (tag.classList.contains('technological_criticality') == false) {
        tag.style.display = "none"
      }
    }

  });

})
