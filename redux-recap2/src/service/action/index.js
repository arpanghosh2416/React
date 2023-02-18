import {
  ADD_BOOK,
  ADD_PRODUCT
} from "../constant";

export const addBookToCart = book => {
  return dispatch => {
    dispatch({
      type: ADD_BOOK,
      payload: book
    });
  }
}

export const addProductToCart = product => {
  return dispatch => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product
    });
  }
}
