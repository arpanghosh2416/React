const { createSlice } = require("@reduxjs/toolkit");

const initialStateProduct = {
  products: []
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialStateProduct,
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
      return state;
    }
  }
});

export const { addProductToCart } = productSlice.actions;
export const productReducer = productSlice.reducer;
