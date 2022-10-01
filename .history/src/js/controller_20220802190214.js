import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
// console.log(icons);
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
// import recipeView from './views/recipeView';
// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log('ABCDXYZ');

//loading recipe
const controllerRecipe = async function () {
  try {
    recipeView.renderSpinner(recipeContainer);
    const id = window.location.hash;
    // console.log(id);
    if (!id) return;
    await model.loadRecipe(id);
    // console.log(recipe);
    // const { recipe } = model.state;
    //2) Redering recipe

    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
// controllerRecipe();

const searchControllerResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    searchView.clearInput();
    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};
const init = function () {
  recipeView.addHandlerRender(controllerRecipe);
  searchView.addHandlerSearch(searchControllerResults);
};
searchControllerResults();
init();
