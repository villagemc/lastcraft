import { createSlice } from "@reduxjs/toolkit";

interface IDashState {
  value: boolean;
}

const initialState: IDashState = {
  value: true
}

export const dashSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleDashActive(state) {
      state.value = !state.value
    },
    toggleDashLocation(state) {
      state.value = true
    }
  }
});

export const { toggleDashActive, toggleDashLocation } = dashSlice.actions;
export default dashSlice.reducer;
