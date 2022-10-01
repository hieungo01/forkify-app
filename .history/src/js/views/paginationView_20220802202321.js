import View from './View';
import icons from '/src/img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = this._data.results / this._data.resultsPerPage;
    //Page 1, and there are other pages;
    //Page 1, and there are NO other pages
    //Last Page
    //First Page
  }
}
export default new PaginationView();
