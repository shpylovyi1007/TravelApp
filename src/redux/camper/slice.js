import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCampersById } from "./operations";

const initialState = {
  campers: [],
  currentCamper: {},
  loading: false,
  error: null,
  total: 0,
  page: 1,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        const currentPage = action.payload.page;

        if (currentPage === 1) {
          state.campers = action.payload.items;
        } else {
          state.campers = [...state.campers, ...action.payload.items];
        }
        state.page = currentPage;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCampersById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCampersById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCamper = action.payload;
      })
      .addCase(getCampersById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
