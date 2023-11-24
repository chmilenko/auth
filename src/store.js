import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Components/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;