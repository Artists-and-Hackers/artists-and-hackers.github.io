let arrow = document.querySelector('section.hero div.arrow a')

arrow.addEventListener("click", function(){
  document.querySelector('section.about').scrollIntoView({
  behavior: 'smooth'
  });
  console.log("it works")
})
