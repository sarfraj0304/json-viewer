import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

export const CounterSlice = createSlice({
  name: "jsonViewer",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = CounterSlice.actions;

export default CounterSlice.reducer;
