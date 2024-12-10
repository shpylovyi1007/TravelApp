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

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
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
      .addCase(getCampers.rejected, handleRejected)

      .addCase(getCampersById.pending, handlePending)
      .addCase(getCampersById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentCamper = action.payload;
      })
      .addCase(getCampersById.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
