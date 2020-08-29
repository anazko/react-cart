import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ThunkAction from "redux-thunk";

//actions
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CATEGORIES = "SET_CATEGORIES";


const initState = {
  products: [],
  categories: [],
  selectedCategory: null,
  sortBy: "title"
}

const catalog = (state = initState, action) => {
  
  switch (action.type) {
    case "SET_PRODUCTS": {
      return {
        ...state,
        products: action.payload
      };
    }
    case "SET_CATEGORIES": {
      return {
        ...state,
        categories: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({ catalog })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ThunkAction)));




const setProducts = (payload) => {
  return { type: SET_PRODUCTS, payload }
}

const setCategories = (payload) => {
  return { type: SET_CATEGORIES, payload }
}


window.store = store;

export {setProducts, setCategories}
export default store;
