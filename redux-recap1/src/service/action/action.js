import {
  ADD_BOOK,
  ADD_PRODUCT
} from "../constant";

export const addBookToCart = book => {
  return {
    type: ADD_BOOK,
    data: book
  };
}

export const addProductToCart = product => {
  return {
    type: ADD_PRODUCT,
    data: product
  };
}
