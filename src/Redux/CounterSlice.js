import { createSlice } from '@reduxjs/toolkit';

let slice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
});


export default slice.reducer;
export const { increment, decrement } = slice.actions;