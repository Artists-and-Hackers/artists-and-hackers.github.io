let list = document.getElementById("list")
let order = document.querySelector("select.order")

order.addEventListener("change", function(){
  let selected = order.value
  if (selected == "Oldest First") {
    list.style.flexDirection = "column-reverse"
  }
  if (selected == "Newest First") {
    list.style.flexDirection = "column"
  }
})
