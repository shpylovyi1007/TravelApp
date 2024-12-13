export const selectCampers = (state) => state.campers.items;

export const selectCurrentCamper = (state) => state.campers.currentCamper;

export const selectIsLoading = (state) => state.campers.loading;

export const selectError = (state) => state.campers.error;

export const selectTotalCampers = (state) => state.campers.total || 0;

export const selectCurrentPage = (state) => state.campers.page || 1;
