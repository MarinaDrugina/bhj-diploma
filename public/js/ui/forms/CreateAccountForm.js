/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(options) {
    Account.create(options.data, (e, response) => {
      if(!response.success) {
        return;
      }

      App.getWidget('accounts').update();
      this.element.reset();

      App.getModal('createAccount').close();

      App.update();
    }); 
  }
}