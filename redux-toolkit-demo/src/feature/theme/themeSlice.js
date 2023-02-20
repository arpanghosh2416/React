import { createSlice } from "@reduxjs/toolkit";

const initialStateTheme = {
  color: "black"
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialStateTheme,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    }
  }
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
