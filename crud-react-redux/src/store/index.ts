import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slices";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    //in old redux versions this would look like this: [persistanceLocalStorageMiddleware, anotherMiddleware]
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch