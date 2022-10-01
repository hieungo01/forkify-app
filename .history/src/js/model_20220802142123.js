import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  try {
    // console.log(id);
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id.slice(1)}`
    );
    // console.log(res);

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    // console.log(data);
    state.recipe = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
