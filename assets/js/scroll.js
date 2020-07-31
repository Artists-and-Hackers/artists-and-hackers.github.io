let arrow = document.querySelector('section.hero a.arrow')

arrow.addEventListener("click", function(){
  document.querySelector('section.about').scrollIntoView({
  behavior: 'smooth'
  });
  console.log("it works")
})
