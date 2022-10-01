import { async } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helper';
import { RES_PER_PAGE } from './config';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
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
    // console.log(state.recipe);
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    //Temp err handing

    console.error(`${err} ⛔⛔⛔`);
    throw err;
  }
};
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${state.search.query}`);
    // console.log(data);
    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
    state.search.page = 1;
    // console.log(state.search.results);
  } catch (err) {
    console.error(`${err} ⛔⛔⛔`);
    throw err;
  }
};
// loadSearchResults('pizza');
export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; //0
  const end = page * state.search.resultsPerPage; //9
  return state.search.results.slice(start, end);
};

export const addBookMark = function (recipe) {
  //Add book mark
  state.bookmarks.push(recipe);
  //Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

export const deleteBookMark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  state.bookmarks.splice(index, 1);
};
