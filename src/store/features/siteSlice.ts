import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISite {
  count: number;
  isBackward: boolean;
  isForward: boolean;
  total: number;
}

const initialState: ISite = {
  count: 1,
  isBackward: true,
  isForward: true,
  total: 1
}

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    incrementSite: (state) => {
      state.count++;
    },

    decrementSite: (state) => {
      state.count--;
    },

    changeSite: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },

    backwardSite: (state) => {
      if (state.count > 1) {
        state.isBackward = false;
      } else if (state.count === 1) {
        state.isBackward = true;
      }
    },

    forwardSite: (state) => {
      const total = Math.ceil(state.total / 20);

      if (state.count < total) {
        state.isForward = false;
      } else if (state.count === total) {
        state.isForward = true;
      }
    },

    totalSite: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    }
  }
});

export const {
  incrementSite,
  decrementSite,
  changeSite,
  backwardSite,
  forwardSite,
  totalSite
} = siteSlice.actions;
export default siteSlice.reducer;