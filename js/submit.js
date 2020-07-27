let buttons = document.querySelectorAll("#submit")
let signup = document.querySelector("section.signup")
let back = document.querySelector("div.back")

buttons.forEach((button) => {
  button.addEventListener('click', event => {
    document.querySelector("section.signup").style.display = "flex"
  });
});


  back.addEventListener('click', event => {
    document.querySelector("section.signup").style.display = "none"
  });
