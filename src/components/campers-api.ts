import axios from "axios";
import { store } from "../redux/store";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = async (page: number) => {
  const { filter } = store.getState();

  const response = await axios.get("/campers", {
    params: {
      page,
      limit: 3,
      location: filter.location,
      equipment: filter.equipment.join(","),
      vehicleType: filter.vehicleType,
    },
  });

  return response.data.items;
};
