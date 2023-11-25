import { createSlice } from "@reduxjs/toolkit";
import {  } from "../thunks/fetchAPI"; // Assuming fetchCategories is an async thunk for category fetching

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const authReducer = authReducer.reducer;
