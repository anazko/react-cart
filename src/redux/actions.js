//actions
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CATEGORIES = "SET_CATEGORIES";


const setProducts = (payload) => {
    return { type: SET_PRODUCTS, payload }
  }
  
const setCategories = (payload) => {
    return { type: SET_CATEGORIES, payload }
}


export {setProducts, setCategories}