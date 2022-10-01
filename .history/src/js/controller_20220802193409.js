import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';
// console.log(icons);
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
// import recipeView from './views/recipeView';
// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log('ABCDXYZ');

const controllerRecipe = async function () {
  try {
    //loading recipe
    recipeView.renderSpinner();
    const id = window.location.hash;
    if (!id) return;
    await model.loadRecipe(id);
    //2) Redering recipe

    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    // console.log(err);
  }
};
// controllerRecipe();

const searchControllerResults = async function () {
  try {
    //1) Get query
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    //2) Load search recipe
    resultView.render(query);
    await model.loadSearchResults(query);
    //3) render results
    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};
const init = function () {
  recipeView.addHandlerRender(controllerRecipe);
  searchView.addHandlerSearch(searchControllerResults);
};
// searchControllerResults();
init();
