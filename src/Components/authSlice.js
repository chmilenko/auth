import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";

export const registration = createAsyncThunk(
  "auth/registration",
  async (data) => {
    if (data.password !== data.passwordRepeat) {
      throw new Error("Пароли не совпадают");
    }
    if (!data.email.trim() || !data.password.trim() || !data.passwordRepeat.trim()) {
      throw new Error("Не все поля заполнены");
    }
    const response = await api.registerUser(data);
    return response; 
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(registration.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;