/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
    const sidebarMini = document.querySelector('.sidebar-mini');

    sidebarToggleBtn.addEventListener('click', (event) => {
      event.preventDefault();

      sidebarMini.classList.toggle('sidebar-open');
      sidebarMini.classList.toggle('sidebar-collapse');
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector('.menu-item_register a').addEventListener('click', (event) => {
      App.getModal('register').open();
    });

    document.querySelector('.menu-item_login a').addEventListener('click', (event) => {
      App.getModal('login').open();
    });

    document.querySelector('.menu-item_logout a').addEventListener('click', (event) => {
      User.logout({}, (err, response) => {
        if (response && response.success) {
          App.setState('init');
        }
      });
    });
  }
}