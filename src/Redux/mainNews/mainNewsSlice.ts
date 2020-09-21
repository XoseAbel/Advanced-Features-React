import { createSlice } from '@reduxjs/toolkit';

export const mainNewsSlice = createSlice({
  //identificador de nuestro feature, si hubiese varios actions se discriminan por el name
  name: 'mainNews',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  //reducer que tienen definidas todas las actions
  reducers: {
    startFecth: state => {
      state.isLoading = true;
    },
    successfulFecth: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload.data;
    },
    errorFecth: (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  startFecth,
  successfulFecth,
  errorFecth,
} = mainNewsSlice.actions;

export default mainNewsSlice.reducer;
