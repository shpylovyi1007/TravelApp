import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./camperSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
