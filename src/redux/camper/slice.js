import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCampersById } from "./operations";

const initialState = {
  items: [],
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
        const { page, items, total } = action.payload;

        if (page === 1) {
          state.items = items;
        } else {
          state.items = [...state.items, ...items];
        }
        //  if (page === 1) {
        //    state.items = items;
        //  } else {
        //    const uniqueItems = items.filter(
        //      (newItem) =>
        //        !state.items.some((existingItem) => existingItem.id === newItem.id)
        //    );
        //    state.items = [...state.items, ...uniqueItems];
        //  }
        state.page = page;
        state.total = total;
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
