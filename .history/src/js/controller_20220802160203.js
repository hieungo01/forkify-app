import * as model from './model';
import recipeView from './views/recipeView';
// console.log(icons);
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import recipeView from './views/recipeView';
const recipeContainer = document.querySelector('.recipe');

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
    alert(err);
  }
};
controllerRecipe();
