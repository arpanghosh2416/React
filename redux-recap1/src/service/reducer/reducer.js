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

export default function cartItems(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      state.cart.books.push(action.data);
      console.warn("LOGGER: reducer.js: book added: state:", state);
      return { ...state };

    case ADD_PRODUCT:
      state.cart.products.push(action.data);
      console.warn("LOGGER: reducer.js: product added: state:", state);
      return { ...state };

    default:
      return { ...state };
  }
}
