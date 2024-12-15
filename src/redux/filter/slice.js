import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    location: "",
    equipment: [],
    form: "panelTruck",
  },
  reducers: {
    setFilters: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFilters: () => ({
      location: "",
      equipment: [],
      form: "panelTruck",
    }),
  },
});

export const selectFilters = (state) => state.filter;

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
