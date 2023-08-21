//LANG-DROPBOX-CONST
const langButton = document.querySelector(".lang-selector__lang-button");
const navbarDropdown = document.querySelector(".navbar-lang-dropdown");
const closeButton = document.querySelector(".lang-selector__close-button");

//FOOTER-MENU-DROPBOX-CONST
const menuItems = document.querySelectorAll("[data-item]");
const submenus = document.querySelectorAll("[data-submenu]");

//FOOTER-POPUP-CONST
const btnOtherLang = document.querySelector(
  ".navbar-lang-dropdown__other-language"
);
const footerPopup = document.querySelector(".footer-popup");
const btnCloseFooterPopup = document.querySelector(
  ".footer-popup__close-button"
);

//LANG-DROPBOX
langButton.addEventListener("click", function () {
  navbarDropdown.classList.remove("disabled");
});

closeButton.addEventListener("click", function () {
  navbarDropdown.classList.add("disabled");
});

//FOOTER-MENU-DROPBOX
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

//FOOTER-POPUP
btnOtherLang.addEventListener("click", () => {
  footerPopup.classList.remove("disabled");
  navbarDropdown.classList.add("disabled");
});

btnCloseFooterPopup.addEventListener("click", () => {
  footerPopup.classList.add("disabled");
});
