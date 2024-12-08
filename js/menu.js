const menuBtn = document.querySelector(".menu-btn");
const menuBtnClose = document.querySelector(".close-btn-menu-icon");
const submenuBtnClose = document.querySelector(".close-btn-submenu-icon");
const submenuBackBtn = document.querySelector(".submenu-back-btn");
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
    document.querySelector('.submenu-mobile').classList.remove("active");
  }
})

// получаем все кнопки навигации
const submenuButtons = document.querySelectorAll('.submenu-item');

// Проходимся по всем кнопкам
submenuButtons.forEach(btn => {
  // вешаем на каждую кнопку обработчик события клик
  btn.addEventListener('click', () => {
    console.log(btn);

    const prevActiveButton = document.querySelector('.submenu-mobile._active');

    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    const nextActiveItemId = `#${btn.getAttribute('data-submenu')}`;
    // получаем новую активную вкладку по id
    const nextActiveItem = document.querySelector(nextActiveItemId);

    // добавляем класс _active кнопке на которую нажали
    btn.classList.add('_active');
    // добавляем класс _active новой выбранной вкладке
    nextActiveItem.classList.add('_active');
  });
});

submenuBackBtn.addEventListener('click', () => {
  console.log("back");

  document.querySelector('.submenu-mobile').classList.remove("_active");
})

console.log(submenuBackBtn);


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};


