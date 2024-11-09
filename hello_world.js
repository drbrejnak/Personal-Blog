console.log("Hello World!");

var prevScrollpos = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hnav").classList.remove("hidden");
  } else {
    document.getElementById("hnav").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}