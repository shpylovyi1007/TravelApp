import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = async (page: number) => {
  const response = await axios.get("/campers", {
    params: {
      page,
      limit: 3,
    },
  });

  return response.data.items;
};
