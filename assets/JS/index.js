// NavBar Scroll Color Change
window.addEventListener("scroll", () => {
  const primaryHeader = document.querySelector("header");
  primaryHeader.classList.toggle("sticky", window.scrollY > 0);
});

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}