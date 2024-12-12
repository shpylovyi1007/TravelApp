import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const ITEMS_PER_PAGE = 10;

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async ({ page = 1, filters = {} }, thunkAPI) => {
    const params = new URLSearchParams({
      page,
      limit: ITEMS_PER_PAGE,
    });

    const filterMapping = {
      location: "location",
      form: "form",
      equipment: {
        AC: "AC",
        bathroom: "bathroom",
        kitchen: "kitchen",
        TV: "TV",
        automatic: "transmission",
      },
    };

    if (filters.location) {
      params.append(filterMapping.location, filters.location);
    }

    if (filters.form) {
      params.append(filterMapping.form, filters.form);
    }

    if (filters.equipment && filters.equipment.length > 0) {
      filters.equipment.forEach((equip) => {
        const apiKey = filterMapping.equipment[equip.toLowerCase()];
        if (apiKey) {
          params.append(apiKey, true);
        }
      });
    }

    try {
      const response = await axios.get(`/campers?${params}`);

      return {
        items: response.data,
        page,
        total: response.data,
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
