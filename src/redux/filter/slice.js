import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    equipment: [],
    form: "",
  },
  reducers: {
    setFilters: (state, action) => {
      console.log("Setting filters:", action.payload);
      return action.payload;
    },
    resetFilters: () => ({
      location: "",
      equipment: [],
      form: "",
    }),
  },
});

export const selectFilters = (state) => state.filters;

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
