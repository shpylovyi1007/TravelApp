import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const ITEMS_PER_PAGE = 4;

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (page, thunkAPI) => {
    const params = new URLSearchParams({
      limit: ITEMS_PER_PAGE,
      page: page,
    });

    try {
      const response = await axios.get(`/campers?${params}`);
      return { ...response.data, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
