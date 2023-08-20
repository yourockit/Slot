//LANG-DROPBOX
const langButton = document.querySelector(".lang-selector__lang-button");
const navbarDropdown = document.querySelector(".navbar-lang-dropdown");
const closeButton = document.querySelector(".lang-selector__close-button");

langButton.addEventListener("click", function () {
  navbarDropdown.classList.remove("disabled");
});

closeButton.addEventListener("click", function () {
  navbarDropdown.classList.add("disabled");
});

//FOOTER-MENU-DROPBOX

const menuItems = document.querySelectorAll("[data-item]");
const submenus = document.querySelectorAll("[data-submenu]");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    submenus.forEach((submenu, submenuIndex) => {
      if (index === submenuIndex) {
        submenu.classList.toggle("disabled");
      } else {
        submenu.classList.add("disabled");
      }
    });
  });
});
