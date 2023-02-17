import { ADD_TO_CART, REMOVE_FROM_CART } from '../constant';

export default function cardItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer.js: switch: ADD_TO_CART:", action);

      return [
        ...state,
        action.data
      ];

    case REMOVE_FROM_CART:
      state.pop();
      console.warn("reducer.js: switch: REMOVE_FROM_CART:", action);

      return [
        ...state
      ];

    default:
      return state;
  }
}
