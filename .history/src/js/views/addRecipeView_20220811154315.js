import View from './View';
import icons from '/src/img/icons.svg';
class AddRecipeView extends View {
  _parentElement = document.querySelector('.pagination');
  _window  = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _overlay = document.querySelector('.overlay');
  _generateMarkup();
}
export default new AddRecipeView();
