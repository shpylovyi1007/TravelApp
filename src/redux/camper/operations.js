import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const ITEMS_PER_PAGE = 4;

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async ({ page = 1, filters = {} }, thunkAPI) => {
    const params = new URLSearchParams({
      limit: ITEMS_PER_PAGE,
      page,
    });

    if (filters) {
      if (filters.location) {
        params.append("location", filters.location);
      }

      if (filters.form) {
        params.append("type", filters.form);
      }

      if (filters.equipment && filters.equipment.length > 0) {
        filters.equipment.forEach((equip) => {
          params.append("equipment", equip);
        });
      }
    }

    try {
      const response = await axios.get(`/campers?${params.toString()}`);
      return {
        items: response.data,
        page,
        total: response.headers["x-total-count"] || response.data.length,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getCampersById = createAsyncThunk(
  "campers/:id",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
