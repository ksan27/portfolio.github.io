window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("menu");
  const pullDownParents = document.getElementById("menu-list");
  const pullDownChild = document.querySelectorAll(".pull-down-list");

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "color: #ee827c")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "color: #ee827c")
  })

  pullDownButton.addEventListener('click', function(){
    if (pullDownParents.getAttribute("style") == "display:block;") {
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      pullDownParents.setAttribute("style", "display:block;")
    }
  })
})
