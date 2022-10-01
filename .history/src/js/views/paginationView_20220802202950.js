import View from './View';
import icons from '/src/img/icons.svg';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    //Page 1, and there are other pages;
    if (currentPage === 1 && numPages > 1) {
      return `Page 1 and other`;
    }
    //Last Page
    if (currentPage === numPages) {
      return 'last page';
    }
    //Other Page
    if (currentPage < numPages) {
      return `other page`;
    }
    //Page 1, and there are NO other pages
    return `<button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${}</span>
          </button>`;
  }
}
export default new PaginationView();
