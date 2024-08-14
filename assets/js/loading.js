function loaded() {
  setTimeout(function(){
    l = document.getElementById("loader");
    l.style.opacity = 0;
    setTimeout(function() {
      l.parentNode.removeChild(l);
      document.body.classList.remove("remove-scrolling");
    }, 2000)
  }, 1000);
}
