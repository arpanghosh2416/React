import { ADD_TO_CART, REMOVE_FROM_CART } from '../constant';

export const addToCart = data => {
  console.warn("action.js: add: data:", data);

  return {
    type: ADD_TO_CART,
    data: data
  };
}

export const removeFromCart = () => {
  console.warn("action.js: remove");

  return {
    type: REMOVE_FROM_CART
  };
}
