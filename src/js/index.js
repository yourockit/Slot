const langButton = document.querySelector(".lang-selector__lang-button");
const navbarDropdown = document.querySelector(".navbar-dropdown");
const closeButton = document.querySelector(".lang-selector__close-button");

langButton.addEventListener("click", function () {
  navbarDropdown.classList.remove("disabled");
});

closeButton.addEventListener("click", function () {
  navbarDropdown.classList.add("disabled");
});

console.log("Ok");
