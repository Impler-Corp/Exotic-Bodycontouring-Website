const open_menu = document.querySelector(".btn-open__menu");
const close_menu = document.querySelector(".btn-close__menu");
const links = document.querySelector(".links");

open_menu.addEventListener("click", () => {
  console.log("clicked!!");
  links.style.transform = "translateX(0%)";
});
