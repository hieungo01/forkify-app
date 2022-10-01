import View from './View';
import icons from '/src/img/icons.svg';
class AddRecipeView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup();
}
export default new AddRecipeView();
