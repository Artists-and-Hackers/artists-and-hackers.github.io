let searchContainer = document.getElementById('search-container')
let placeholder = document.getElementById('placeholder')

let searchBox = searchContainer.getBoundingClientRect()

placeholder.style.width = (searchBox.right - searchBox.left) + "px"
placeholder.style.height = (searchBox.bottom - searchBox.top) + "px"


var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/searchEpisodes.json'
})
