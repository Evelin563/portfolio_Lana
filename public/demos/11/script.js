const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav__link");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("nav--active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav--active");
  });
});