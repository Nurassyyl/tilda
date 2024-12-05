const menuBtn = document.querySelector(".menu-btn");
const menuBtnClose = document.querySelector(".close-btn-menu-icon");
const menu = document.querySelector(".nav-wrap-mobile");

menuBtn.addEventListener('click', () => {
  menu.style.transform = "translateX(0)";
})

menuBtnClose.addEventListener('click', () => {
  menu.style.transform = "translateX(-100%)";
})

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-wrap-mobile')) {
    menu.style.transform = "translateX(-100%)";
  }
})
