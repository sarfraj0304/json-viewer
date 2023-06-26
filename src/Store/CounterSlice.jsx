import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  rawData: [],
};

export const CounterSlice = createSlice({
  name: "jsonViewer",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    addRawData: (state, action) => {
      state.rawData = action.payload;
    },
  },
});

export const { addData, addRawData } = CounterSlice.actions;

export default CounterSlice.reducer;
