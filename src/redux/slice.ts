import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  location: string;
  equipment: string[];
  vehicleType: string;
}

const initialState: FilterState = {
  location: "",
  equipment: [],
  vehicleType: "van",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<FilterState>>) => {
      return { ...state, ...action.payload };
    },
    resetFilter: () => initialState,
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
