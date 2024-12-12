import { createSelector } from "@reduxjs/toolkit";

export const selectCampersState = (state) => state.campers;

export const selectCampers = createSelector(
  [selectCampersState],
  (campersState) => campersState.campers
);

export const selectIsLoading = createSelector(
  [selectCampersState],
  (campersState) => campersState.loading
);

export const selectError = createSelector(
  [selectCampersState],
  (campersState) => campersState.error
);

export const selectCurrentCamper = createSelector(
  [selectCampersState],
  (campersState) => campersState.currentCamper
);

export const selectTotalCampers = createSelector(
  [selectCampersState],
  (campersState) => campersState.total || 0
);

export const selectCurrentPage = createSelector(
  [selectCampersState],
  (campersState) => campersState.page || 1
);
