let transcriptToggle = document.querySelector("div.transcriptToggle")
let transcriptToggleChildren = document.querySelector("div.transcriptToggle").children
let summaryButton = document.querySelector("div.summaryButton")
let transcriptButton = document.querySelector("div.transcriptButton")

let episodeArticle = document.querySelector("section.article")
let episodeTranscript = document.querySelector("section.transcript")


Array.from(transcriptToggleChildren).forEach(item => {
  item.addEventListener("click", function(){
    Array.from(transcriptToggleChildren).forEach(child => {
      if (child.classList.contains("selected")) {
        child.classList.remove("selected")
      }
    })
    item.classList.add("selected")

    if (item.classList.contains("summaryButton") == true && window.innerWidth > 850) {
      episodeTranscript.style.display = "none"
      episodeArticle.style.display = "block"
    }
    if (item.classList.contains("transcriptButton") == true && window.innerWidth > 850) {
      console.log("article gone");
      episodeTranscript.style.display = "block"
      episodeArticle.style.display = "none"
    }
    if (item.classList.contains("summaryButton") == true && window.innerWidth < 850) {
      episodeTranscript.style.display = "none"
      episodeArticle.style.display = "flex"
    }
    if (item.classList.contains("transcriptButton") == true && window.innerWidth < 850) {
      console.log("article gone");
      episodeTranscript.style.display = "flex"
      episodeArticle.style.display = "none"
    }
  })
});
