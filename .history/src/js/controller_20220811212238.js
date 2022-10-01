import * as model from './model';
import { MODAL_CLOSE_SEC } from './config';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultView from './views/resultView';
import paginationView from './views/paginationView';
import bookMarkView from './views/bookmarkView';
import addRecipeView from './views/addRecipeView';

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

    resultView.update(model.getSearchResultPage());
    bookMarkView.update(model.state.bookmarks);
    await model.loadRecipe(id);
    //2) Redering recipe

    recipeView.render(model.state.recipe);
    // console.log(model.state.recipe);
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

    //4) initial pagination button
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

const controllerServing = function (newServings) {
  //Update the recipe serving (in state)
  model.updateServing(newServings);
  //Update the recipe view
  recipeView.update(model.state.recipe);
};

const controllerAddBookMark = function () {
  //And or Remove book mark
  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.deleteBookMark(model.state.recipe.id);
  //update recipe view
  recipeView.update(model.state.recipe);
  //Render bookmarks;
  bookMarkView.render(model.state.bookmarks);
};
const controllerBookmarks = function () {
  bookMarkView.render(model.state.bookmarks);
};
const controllerAddRecipe = async function (newRecipe) {
  try {
    await model.uploadRecipe(newRecipe);
    // console.log(model.state.recipe);

    //Render recipe
    recipeView.render(model.state.recipe);

    //Success message
    addRecipeView.renderMessage();
    //Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.log('🔴', error);
    addRecipeView.renderError(error.message);
  }
  // console.log(newRecipe);
};
const init = function () {
  bookMarkView.addHandlerRender(controllerBookmarks);
  recipeView.addHandlerRender(controllerRecipe);
  recipeView.addHandlerUpdateServings(controllerServing);
  recipeView.addHandlerBookMark(controllerAddBookMark);
  searchView.addHandlerSearch(searchControllerResults);
  paginationView.addHandlerClick(controllerPagination);
  addRecipeView._addHandlerForm(controllerAddRecipe);
};
// searchControllerResults();
init();
