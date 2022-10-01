import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helper';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};
export const loadRecipe = async function (id) {
  try {
    // console.log(id);
    const url = `${API_URL}/${id.slice(1)}`;
    const data = await getJSON(url);
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
    //Temp err handing

    console.error(`${err} ⛔⛔⛔`);
    throw err;
  }
};
// export const loadSearchResults = async function (query) {
//   try {
//     state.search.query = query;
//     const data = await getJSON(`${API_URL}?search=${state.search.query}`);
//     // console.log(data);
//     state.search.results = data.data.recipes.map(repcipe => {
//       return {
//         id: repcipe.id,
//         title: repcipe.title,
//         publisher: repcipe.publisher,
//         image: repcipe.image_url,
//       };
//     });
//     // console.log(state.search.results);
//   } catch {
//     console.error(`${err} ⛔⛔⛔`);
//     throw err;
//   }
// };
// loadSearchResults('pizza');
