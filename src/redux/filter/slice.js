import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    location: "",
    equipment: [],
    vehicleType: "",
    page: 1,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
      state.page = 1;
    },
    setEquipment: (state, action) => {
      state.equipment = action.payload;
      state.page = 1;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetFilter: () => ({
      location: "",
      equipment: [],
      vehicleType: "",
      page: 1,
    }),
  },
});

export const {
  setLocation,
  setEquipment,
  setVehicleType,
  setPage,
  resetFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
