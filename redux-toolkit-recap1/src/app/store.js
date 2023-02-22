import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productReducer } from "../feature/toolkit-demo/demo/product/productSlice"
import { demoApi } from "../service/demo"

export const store = configureStore({
  reducer: {
    product: productReducer,
    [demoApi.reducerPath]: demoApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(demoApi.middleware)
});

setupListeners(store.dispatch);
