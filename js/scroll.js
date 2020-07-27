let arrow = document.querySelector('section.hero section.arrow a')

arrow.addEventListener("click", function(){
  document.querySelector('section.socialmedia').scrollIntoView({
  behavior: 'smooth'
  });
})
