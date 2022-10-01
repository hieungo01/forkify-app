import View from './View';
import icons from '/src/img/icons.svg';
class BookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';
  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(result => this._generateSearchMarkup(result))
      .join('');
  }
  _generateSearchMarkup(result) {
    const id = window.location.hash.slice(1);
    return `<li class="preview">
            <a class="preview__link ${
              result.id === id ? 'preview__link--active' : ''
            } "  href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
                <div class="preview__user-generated">
                  
                </div>
              </div>
            </a>
          </li>`;
  }
}

export default new ResultView();
