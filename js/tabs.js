// получаем все кнопки навигации
const tabsButtons = document.querySelectorAll('.brands-item');

// Проходимся по всем кнопкам
tabsButtons.forEach(btn => {
  // вешаем на каждую кнопку обработчик события клик
  btn.addEventListener('click', () => {
    // Получаем предыдущую активную кнопку
    const prevActiveItem = document.querySelector('.brands-tabs-content__item._active');
    // Получаем предыдущую активную вкладку
    const prevActiveButton = document.querySelector('.brands-item._active');

    // Проверяем есть или нет предыдущая активная кнопка
    if (prevActiveButton) {
      //Удаляем класс _active у предыдущей кнопки если она есть
      prevActiveButton.classList.remove('_active');
    }

    // Проверяем есть или нет предыдущая активная вкладка
    if (prevActiveItem) {
      // Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveItem.classList.remove('_active');
    }
    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    // получаем новую активную вкладку по id
    const nextActiveItem = document.querySelector(nextActiveItemId);

    // добавляем класс _active кнопке на которую нажали
    btn.classList.add('_active');
    // добавляем класс _active новой выбранной вкладке
    nextActiveItem.classList.add('_active');
  });
});


// получаем все кнопки навигации
const tabsButtonsSubmenu = document.querySelectorAll('.submenu-mobile-tabs-head__title');

// Проходимся по всем кнопкам
tabsButtonsSubmenu.forEach(btn => {
  // вешаем на каждую кнопку обработчик события клик
  btn.addEventListener('click', () => {
    // Получаем предыдущую активную кнопку
    const prevActiveItem = document.querySelector('.submenu-mobile-tabs-head__title._active');
    // Получаем предыдущую активную вкладку
    const prevActiveButton = document.querySelector('.submenu-mobile-tabs-content__list._active');

    // Проверяем есть или нет предыдущая активная кнопка
    if (prevActiveButton) {
      //Удаляем класс _active у предыдущей кнопки если она есть
      prevActiveButton.classList.remove('_active');
    }

    // Проверяем есть или нет предыдущая активная вкладка
    if (prevActiveItem) {
      // Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveItem.classList.remove('_active');
    }
    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    // получаем новую активную вкладку по id
    const nextActiveItem = document.querySelector(nextActiveItemId);

    // добавляем класс _active кнопке на которую нажали
    btn.classList.add('_active');
    // добавляем класс _active новой выбранной вкладке
    nextActiveItem.classList.add('_active');
  });
});