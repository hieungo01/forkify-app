import View from './View';
import icons from '/src/img/icons.svg';
class AddRecipeView extends View {
  _parentElement = document.querySelector('.pagination');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', function (e) {
      this._overlay.classList.toggle('hidden');
      this._window.classList.toggle('hidden');
    });
  }
  _generateMarkup() {}
}
export default new AddRecipeView();
