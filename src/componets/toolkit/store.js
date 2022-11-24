import { configureStore } from "@reduxjs/toolkit";
import digireducer from "./digiSlice";
import selectionreducer from "./selectionSlice";

const store = configureStore({
  reducer: {
    digireducers: digireducer,
    selectionreducers: selectionreducer,
  },
});
export default store;
