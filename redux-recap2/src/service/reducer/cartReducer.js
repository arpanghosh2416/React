import {
  ADD_BOOK,
  ADD_PRODUCT
} from "../constant";

const initialState = {
  cart: {
    books: [],
    products: []
  }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      state.cart.books.push(action.payload);
      console.warn("cartReducer.js: switch: addBook: state:", state);
      return { ...state };

    case ADD_PRODUCT:
      state.cart.products.push(action.payload);
      console.warn("cartReducer.js: switch: addProduct: state:", state);
      return { ...state };

    default:
      return { ...state };
  }
}
