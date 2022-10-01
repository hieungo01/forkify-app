import View from './View';
import icons from '/src/img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    //Page 1, and there are other pages;
    if (this._data.page === 1) {
      return;
    }
    //Page 1, and there are NO other pages
    //Last Page
    //Other Page
  }
}
export default new PaginationView();
