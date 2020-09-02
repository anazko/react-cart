import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ThunkAction from "redux-thunk";


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


window.store = store;

export { store };
