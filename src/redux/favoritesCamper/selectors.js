export const selectFavoritesCampers = (state) =>
  state.favorites.favoritesCampers;
export const isCamperFavorite = (state, camperId) =>
  state.favorites.favoritesCampers.includes(camperId);
