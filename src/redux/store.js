import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { campersReducer } from "./camper/slice";
import storage from "redux-persist/lib/storage";
import { favoritesReducer } from "./favoritesCamper/slice";
import { filterReducer } from "./filter/slice";

const persistConfig = {
  key: "campers",
  storage,
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const filterPersistConfig = {
  key: "filter",
  storage,
};

const persistedReducer = persistReducer(persistConfig, campersReducer);

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedReducer,
    favorites: persistedFavoritesReducer,
    filter: persistedFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
