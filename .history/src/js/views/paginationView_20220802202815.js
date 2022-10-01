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
    if (this._data.page === 1 && numPages > 1) {
      return `Page 1 and other`;
    }
    //Last Page
    if (this._data.page === numPages) {
      return 'last page';
    }
    //Other Page
    if (this._data.page < numPages) {
      return `other page`;
    }
    //Page 1, and there are NO other pages
    return `only have 1 page`;
  }
}
export default new PaginationView();
