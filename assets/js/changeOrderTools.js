//for chronology
let list = document.getElementById("list")
let order = document.querySelector("select.order")

//for tags
let subject = document.querySelector("select.subject")
let episode = document.querySelectorAll("section.episode")
let tool = document.querySelectorAll("section.tool")






let tags = [
  "Technological Criticality",
  "Esolangs",
  "Livecoding",
  "Radical Technology",
  "Activism",
  "Tools",
  "Algorithmic Inequality",
  "Coding Languages",
  "Computing History",
  "Digital Commons",
  "Alternative Networks",
  "Worldbuilding",
  "Speculative Futurism"
]

for (var i = 0; i < tags.length; i++) {
  let option = document.createElement("option")
  let textnode = document.createTextNode(tags[i])
  option.appendChild(textnode)
  option.value = tags[i]
  subject.appendChild(option)

}




subject.addEventListener("change", function(){
  let selected = subject.value
  episode.forEach(tag => {
    for (let i = 0; i < tags.length; i++) {
        if (selected == tags[i]){
          let tagComputified = tags[i].toLowerCase().replace(" ", "_")
          if (tag.classList.contains(tagComputified) == true){
            tag.style.display = "flex"
          }
          if (tag.classList.contains(tagComputified) == false){
            tag.style.display = "none"
          }
        }
    }

    if (selected == "") {
      tag.style.display = "flex"
    }
  });

  tool.forEach(tag => {
    for (let i = 0; i < tags.length; i++) {
        if (selected == tags[i]){
          let tagComputified = tags[i].toLowerCase().replace(" ", "_")
          if (tag.classList.contains(tagComputified) == true){
            tag.style.display = "flex"
          }
          if (tag.classList.contains(tagComputified) == false){
            tag.style.display = "none"
          }
        }
    }

    if (selected == "") {
      tag.style.display = "flex"
    }
  });
})
