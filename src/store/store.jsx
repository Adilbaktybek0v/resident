import { configureStore, createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: { value: []},
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = exampleSlice.actions;

const store = configureStore({
  reducer: {
    example: exampleSlice.reducer,
  },
});

export default store;
