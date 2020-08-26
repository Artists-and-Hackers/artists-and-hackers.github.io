let page = document.querySelector("section.episode-page")
let player = document.querySelector("section.header div.pod_player")
let playerSm = document.querySelector("section.navbar div.pod_player")
let audio = document.getElementById("audio")
let audioSource = document.getElementById("audioSource")
let podDescription = document.querySelector("section.header div.description")
let playButton = document.querySelector("div.playButton svg")
let header = document.querySelector("section.header")
let url = page.getAttribute('data-fileLink')
let headerPlay = document.getElementById('play')
let headerPlaySm = document.getElementById('playSm')
let headerPause = document.getElementById('pause')
let headerPauseSm = document.getElementById('pauseSm')
let currentTimeDisplay = document.querySelector('h4.startTime')
let currentTimeDisplaySm = document.querySelector('h4.startTimeSm')
let remainingTimeDisplay = document.querySelector('h4.endTime')
let remainingTimeDisplaySm = document.querySelector('h4.endTimeSm')
let progress = document.querySelector('progress')
let progressSm = document.querySelector('progress.sm')
let playhead = document.querySelector('div.playhead')
let playheadSm = document.querySelector('div.playheadSm')

//Temporary for development, delete later
// player.style.display = "flex"
// podDescription.style.display = "none"
// headerPause.style.display = "none"
if (window.innerWidth > 800) {
  player.style.display = "none"
  playerSm.style.display = "none"
} else if (window.innerWidth <= 800){
  player.style.display = "none"
  playerSm.style.display = "none"
  headerPauseSm.style.display = "none"
}

//make audioplayer height the same as the header
let headerSize = header.getBoundingClientRect()
let headerHeight = headerSize.bottom - headerSize.top
player.style.height = headerHeight + "px"



audioSource.src = url
audio.load()


playButton.addEventListener("click", function(){
  if (window.innerWidth > 800) {
    player.style.display = "flex"
    podDescription.style.display = "none"
    headerPlay.style.display = "none"
    headerPause.style.display = "block"
    audio.play()
  } else if (window.innerWidth <= 800){
    playerSm.style.display = "flex"
    player.style.display = "none"
    headerPlaySm.style.display = "none"
    headerPauseSm.style.display = "block"
    audio.play()
  }

})

headerPause.addEventListener("click", function(){
  audio.pause()
  headerPause.style.display = "none"
  headerPlay.style.display = "block"
})
headerPlay.addEventListener("click", function(){
  audio.play()
  headerPause.style.display = "block"
  headerPlay.style.display = "none"
})
headerPauseSm.addEventListener("click", function(){
  audio.pause()
  headerPauseSm.style.display = "none"
  headerPlaySm.style.display = "block"
})
headerPlaySm.addEventListener("click", function(){
  audio.play()
  headerPauseSm.style.display = "block"
  headerPlaySm.style.display = "none"
})


audio.addEventListener("timeupdate", function(){
  //display current time
    let currentTimeRaw = audio.currentTime
    let minutes = Math.floor(currentTimeRaw / 60)
    let seconds = Math.floor(currentTimeRaw % 60)

    let currentTimeFormatted = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')

    currentTimeDisplay.innerHTML = currentTimeFormatted
    currentTimeDisplaySm.innerHTML = currentTimeFormatted
  //display time remaining
    let remainingTimeRaw = audio.duration - audio.currentTime
    let minutes2 = Math.floor(remainingTimeRaw / 60);
    let seconds2 = Math.floor(remainingTimeRaw % 60)

    let remainingTimeFormatted = minutes2.toString().padStart(2, '0') + ':' + seconds2.toString().padStart(2, '0')

    remainingTimeDisplay.innerHTML = remainingTimeFormatted
    remainingTimeDisplaySm.innerHTML = remainingTimeFormatted
  //change progress bar
    let progressRaw = currentTimeRaw / audio.duration
    let progress100 = Math.floor(progressRaw * 100)
    progress.value = progress100
    progressSm.value = progress100
  //playhead
    let progressBox = progress.getBoundingClientRect()
    let progressBoxSm = progressSm.getBoundingClientRect()
    let playerBox = player.getBoundingClientRect()
    let playerBoxSm = playerSm.getBoundingClientRect()
    let playheadOrigin = progressBox.left - playerBox.left
    let playheadOriginSm = progressBoxSm.left - playerBoxSm.left

    let playheadMovePos = (progressBox.right - progressBox.left) / 100
    let playheadMovePosSm = (progressBoxSm.right - progressBoxSm.left) / 100
    let playheadMove = (progress100 * playheadMovePos) + playheadOrigin
    let playheadMoveSm = (progress100 * playheadMovePosSm) + playheadOriginSm
    playhead.style.left = playheadMove + "px"
    playheadSm.style.left = playheadMoveSm + "px"

    //move playhead
      progress.addEventListener("click", function(event){
        let mouseX = event.clientX
        let mouseRelative = mouseX - progressBox.left
        let progressSize = progressBox.right - progressBox.left
        let mousePercent = Math.floor(mouseRelative/progressSize * 100)
        let selectedTime = (audio.duration / 100) * mousePercent
        audio.currentTime = selectedTime
        audio.play

        //Think about onmousemove to get it to be dragable!
      })
      progressSm.addEventListener("click", function(event){
        let mouseX = event.clientX
        let mouseRelative = mouseX - progressBoxSm.left
        let progressSizeSm = progressBoxSm.right - progressBoxSm.left
        let mousePercent = Math.floor(mouseRelative/progressSizeSm * 100)
        let selectedTime = (audio.duration / 100) * mousePercent
        audio.currentTime = selectedTime
        audio.play

        //Think about onmousemove to get it to be dragable!
      })

})
