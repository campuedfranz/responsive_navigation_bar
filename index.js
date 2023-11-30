const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".hide-links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});


window.addEventListener('resize', function() {
    if (this.window.innerWidth > 799) {
        links.classList.remove("hide-links");
        links.classList.add('show-links')
    }
})