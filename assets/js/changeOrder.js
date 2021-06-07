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
      tag.style.display = "flex"
      console.log(tag.classList.contains('technological_criticality'));
    }

    if (selected == "Esolangs") {
      if (tag.classList.contains('esolangs')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('esolangs') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Livecoding") {
      if (tag.classList.contains('livecoding')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('livecoding') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Technological Criticality") {
      console.log(tag.classList);
      if (tag.classList.contains('technological_criticality')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('technological_criticality') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Radical Technology") {
      if (tag.classList.contains('radical_technology')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('radical_technology') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Activism") {
      if (tag.classList.contains('activism')) {
        tag.style.display = "grid"
      }
      if (tag.classList.contains('activism') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Tools") {
      if (tag.classList.contains('tools')) {
        tag.style.display = "grid"
      }
      if (tag.classList.contains('tools') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Algorithmic Inequality") {
      if (tag.classList.contains('algorithmic_inequality')) {
        tag.style.display = "grid"
      }
      if (tag.classList.contains('algorithmic_inequality') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Coding Languages") {
      if (tag.classList.contains('coding_languages')) {
        tag.style.display = "grid"
      }
      if (tag.classList.contains('coding_languages') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Computing History") {
      if (tag.classList.contains('computing_history')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('computing_history') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Digital Commons") {
      if (tag.classList.contains('digital_commons')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('digital_commons') == false) {
        tag.style.display = "none"
      }
    }

    if (selected == "Alternative Networks") {
      if (tag.classList.contains('alternative_networks')) {
        tag.style.display = "flex"
      }
      if (tag.classList.contains('alternative_networks') == false) {
        tag.style.display = "none"
      }
    }



  });

})
