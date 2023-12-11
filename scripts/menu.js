const menuIcon = document.querySelector(".responsive-menu-icon");
const menu = document.querySelector(".navigation");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  menu.classList.toggle("responsive-nav");
});
