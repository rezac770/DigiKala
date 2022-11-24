import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
  bestsell: [],
  loading: false,
  errormessage: "",
};
export const getoffer = createAsyncThunk("get/offer", async () => {
  const res = await fetch(`http://localhost:3004/offer`);
  const data = await res.json();
  return data;
});
export const getsell = createAsyncThunk("get/sell", async () => {
  const res = await fetch(`http://localhost:3004/bestseliing`);
  const data = await res.json();
  return data;
});

const digikala = createSlice({
  name: "digikala",
  initialState,

  extraReducers(builder) {
    builder.addCase(getoffer.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.loading = false;
    });
    builder.addCase(getoffer.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getoffer.rejected, (state, action) => {
      state.errormessage = "falid loading api";
    });
    builder.addCase(getsell.fulfilled, (state, action) => {
      state.bestsell = action.payload;
      state.loading = false;
    });
    builder.addCase(getsell.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getsell.rejected, (state, action) => {
      state.errormessage = "falid loading api";
    });
  },
});
export default digikala.reducer;
export const offers = (state) => state.digireducers.offers;
export const sells = (state) => state.digireducers.bestsell;
export const loading = (state) => state.digireducers.loading;
