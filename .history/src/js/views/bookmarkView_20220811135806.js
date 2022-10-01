import View from './View';
import previewView from './previewView';
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
}

export default new BookMarkView();
