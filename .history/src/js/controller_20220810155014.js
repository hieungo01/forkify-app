import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';
import paginationView from './views/paginationView';
// console.log(icons);
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
// import recipeView from './views/recipeView';
// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log('ABCDXYZ');
if (module.hot) {
  module.hot.accept();
}
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
    // recipeView.renderError();
    console.log(err);
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
    // resultView.render(query);
    await model.loadSearchResults(query);
    //3) render results
    // console.log(model.state.search.results);
    // resultView.render(model.state.search.results);
    resultView.render(model.getSearchResultPage());

    //4) initial panination button
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};
const controllerPagination = async function (goToPage) {
  //1. Render new Result
  resultView.render(model.getSearchResultPage(goToPage));

  //2) Render new button
  paginationView.render(model.state.search);
  // console.log(goToPage);
};

const controllerServing = function () {
  //Update the recipe serving (in state)
  //Update the recipe view
};

const controllerBookMark = function () {
  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.deleteBookMark(model.state.recipe.id);
  recipeView.update(model.state.recipe);
};
const init = function () {
  recipeView.addHandlerRender(controllerRecipe);
  recipeView.addHandlerBookMark(controllerBookMark);
  searchView.addHandlerSearch(searchControllerResults);
  paginationView.addHandlerClick(controllerPagination);
};
// searchControllerResults();
init();
