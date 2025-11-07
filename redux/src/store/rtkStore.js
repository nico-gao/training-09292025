import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../slices/rtkCarSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
