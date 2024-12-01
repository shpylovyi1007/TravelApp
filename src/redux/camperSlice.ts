import { createSlice } from "@reduxjs/toolkit";
import { showMoreCampers } from "./campersOperation";
import { ItemType } from "../components/CatalogList/CatalogList";

interface CampersState {
  currentCamper: ItemType | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CampersState = {
  currentCamper: null,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showMoreCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(showMoreCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(showMoreCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const campersReducer = campersSlice.reducer;
