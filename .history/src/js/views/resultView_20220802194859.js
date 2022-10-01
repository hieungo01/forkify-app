import View from './View';
import icons from '/src/img/icons.svg';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We not found your recipe. Please try again!';
  _message = '';
  _generateMarkup() {
    return this._data
      .map(data => {
        return `<li class="preview">
            <a class="preview__link" href="#${data.id}">
              <figure class="preview__fig">
                <img src="${data.image}" alt="${data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${data.title}</h4>
                <p class="preview__publisher">${data.publisher}</p>
                <div class="preview__user-generated">
                  
                </div>
              </div>
            </a>
          </li>`;
      })
      .join('');
  }
}

export default new ResultView();
