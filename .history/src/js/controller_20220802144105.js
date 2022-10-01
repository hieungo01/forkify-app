import * as model from './model';
import recipeView from './views/recipeView';
import icons from '../img/icons.svg';
// console.log(icons);
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import recipeView from './views/recipeView';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log('ABCDXYZ');

const renderSpinner = function (parentEl) {
  const markup = `
   <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};
//loading recipe
const showRecipe = async function () {
  try {
    renderSpinner(recipeContainer);
    const id = window.location.hash;
    // console.log(id);
    if (!id) return;
    await model.loadRecipe(id);
    // console.log(recipe);
    const { recipe } = model.state;
    //2) Redering recipe

    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);

    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    alert(err);
  }
};
showRecipe();

['hashchange', 'load'].forEach(el => window.addEventListener(el, showRecipe));
