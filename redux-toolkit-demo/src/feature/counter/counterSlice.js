import { createSlice } from "@reduxjs/toolkit";

const initialStateCounter = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounter,
  reducers: {
    decrement: state => {
      state.count -= 1;
      return state;
    },

    increment: state => {
      state.count += 1;
      return state;
    },

    incrementByAmount: (state, action) => {
      state.count += Number(action.payload);
      return state;
    },
  }
});

export const { decrement, increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
