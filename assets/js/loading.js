function loaded() {
  setTimeout(function(){
    l = document.getElementById("loader");
    l.style.opacity = 0;
    setTimeout(function() {
      l.parentNode.removeChild(l);
      document.body.classList.remove("remove-scrolling");
    }, 1000)
  }, 1000);
}
