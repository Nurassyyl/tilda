const menuBtnOpenMain = document.querySelector(".menu-btn-open");
const menuBtnCloseMain = document.querySelector(".nav-close-btn");
const menuMain = document.querySelector(".nav");
const menuDropBtn = document.querySelector(".menu-item-drop");
const menuDropdowns = document.querySelector(".menu-list-dropdowns");

menuBtnOpenMain.addEventListener('click', () => {
  menuMain.style.transform = "translateX(0)";
})

menuBtnCloseMain.addEventListener('click', () => {
  menuMain.style.transform = "translateX(100%)";
})

menuDropBtn.addEventListener('click', () => {
  menuDropdowns.classList.toggle('active');
})