const toggleDarkMode = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("navbar-dark");

  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.classList.toggle("navbar-toggler-dark");

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.toggle("nav-link-dark");
  });

  const input = document.querySelector(".input");
  input.classList.toggle("input-dark");
  const searchIcon = document.querySelector(".ionicon");
  searchIcon.classList.toggle("ionicon-dark");

  const formButton = document.querySelector(".nav_button");
  formButton.classList.toggle("nav_button-dark");

  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  moonIcon.style.display =
    moonIcon.style.display === "none" ? "inline" : "none";
  sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
};

const darkModeButton = document.getElementById("dark-mode-toggle");
darkModeButton.addEventListener("click", toggleDarkMode);
