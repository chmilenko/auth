import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";
import { setTokenInCookie } from "../Hooks/setCookie";
export const registration = createAsyncThunk(
  "auth/registration",
  async (data) => {
    // if (data.password !== data.passwordRepeat) {
    //   throw new Error("Пароли не совпадают");
    // }
    if (!data.mail.trim() || !data.password.trim()) {
      throw new Error("Не все поля заполнены");
    }
    const response = await api.registerUser(data);
    return response;
  }
);

export const auth = createAsyncThunk("auth", async (data) => {
  if (!data.mail.trim() || !data.password.trim()) {
    throw new Error("Не все поля заполнены");
  }
  const response = await api.authorization(data);
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
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
      })
      .addCase(auth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.user = action.payload;
        setTokenInCookie(action.payload.token)
        state.error = null;
        state.loading = false;
      })
      .addCase(auth.rejected, (state, action) => {
        state.error = null;
        state.loading = true;
      });
  },
});

export default authSlice.reducer;
