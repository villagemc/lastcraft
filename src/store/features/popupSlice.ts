import { createSlice } from '@reduxjs/toolkit';

interface IPopupActive {
  isPopup: boolean;
}

const initialState: IPopupActive = {
  isPopup: false
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isPopup = true;
    },
    closePopup: (state) => {
      state.isPopup = false;
    }
  }
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;