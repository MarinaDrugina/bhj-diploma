/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if(!element) {
      throw new Error('Нет такого элемента');
    }

    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const createIncomeBtn = this.element.querySelector('.create-income-button');
    const createExpenseBtn = this.element.querySelector('.create-expense-button');
    const incomeModal = App.getModal('newIncome');
    const expenseModal = App.getModal('newExpense');

    createIncomeBtn.addEventListener('click', () => incomeModal.open());
    createExpenseBtn.addEventListener('click', () => expenseModal.open());
  }
}
