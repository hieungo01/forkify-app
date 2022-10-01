import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};
export const loadRecipe = async function (id) {
  // console.log(id);
  if (!id) return;
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id.slice(1)}`
  );
  // console.log(res);

  const data = await res.json();
  if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  // console.log(data);
  let { recipe } = data.data;
  recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };
};
