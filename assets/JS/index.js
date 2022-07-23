// NavBar Scroll Color Change
window.addEventListener("scroll", () => {
  const primaryHeader = document.querySelector("header");
  primaryHeader.classList.toggle("sticky", window.scrollY > 50);
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

// Contact Form with AJAX
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Thanks for the submission!!");
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          alert("Oops! There was a problem submitting your form");
        }
      })
    }
  }).catch(error => {
    alert("Oops! There was a problem submitting your form");
  });
}
form.addEventListener("submit", handleSubmit)

// Nav
const navItems = document.querySelector(".navigation_links")
const navLinks = document.querySelectorAll(".nav-link")
const btnChecked = document.querySelector(".checkbtn")

btnChecked.addEventListener("click", () => {
  navItems.classList.toggle("toggleMenu")
})

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navItems.classList.toggle("toggleMenu")
  })
})