const menuBtnOpenMain = document.querySelector(".menu-btn-open");
const menuBtnCloseMain = document.querySelector(".nav-close-btn");
const menuMain = document.querySelector(".nav-mobile");
const menuDropBtn = document.querySelector(".menu-item-drop");
const menuDropdowns = document.querySelector(".menu-list-dropdowns");
const body = document.body;

menuBtnOpenMain.addEventListener('click', () => {
  menuMain.style.transform = "translateX(0)";
  body.classList.add('hidden');
})

menuBtnCloseMain.addEventListener('click', () => {
  menuMain.style.transform = "translateX(100%)";
  body.classList.remove('hidden');
})

menuDropBtn.addEventListener('click', () => {
  menuDropdowns.classList.toggle('active');
})