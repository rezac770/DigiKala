import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selections: [],
  singleselect: [],
  loading: false,
  counter: 0,
};

export const getslection = createAsyncThunk("get/fetch", async () => {
  const res = await fetch(`http://localhost:3004/slection`);
  const data = await res.json();
  return data;
});
export const singleslection = createAsyncThunk("get/single", async (id) => {
  const res = await fetch(`http://localhost:3004/slection/${id}`);
  const data = await res.json();
  return data;
});

const selection = createSlice({
  name: "selection",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    deletcount: (state) => {
      state.counter = 0;
    },
  },
  extraReducers(builder) {
    builder.addCase(getslection.fulfilled, (state, action) => {
      state.selections = action.payload;
      state.loading = false;
    });
    builder.addCase(getslection.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(singleslection.fulfilled, (state, action) => {
      state.singleselect = action.payload;
    });
  },
});
export default selection.reducer;
export const { increment, deletcount } = selection.actions;
export const selections = (state) => state.selectionreducers.selections;
export const single = (state) => state.selectionreducers.singleselect;
export const loading = (state) => state.selectionreducers.loading;
export const counter = (state) => state.selectionreducers.counter;
