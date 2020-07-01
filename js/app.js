const menuToggler = document.querySelector(".menu-toggler");
const menu = document.querySelector("nav ul");
const menuCloseBtn = document.querySelector(".close");

menuToggler.addEventListener("click", () => {
  menu.classList.toggle("active-menu");
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle("active-menu");
});
