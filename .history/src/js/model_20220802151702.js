import { async } from 'regenerator-runtime';
import { API_URL } from './config';
export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  try {
    // console.log(id);
    const res = await fetch(`${id.slice(1)}`);
    // console.log(res);

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    // console.log(data);
    const { recipe } = data.data;
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
