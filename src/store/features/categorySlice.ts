import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from './api/ICategories';

const initialState: Partial<ICategory> = {};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    toggleCategory: (_, action: PayloadAction<ICategory>) => {
      return action.payload
    }
  }
});

export const { toggleCategory } = categorySlice.actions;
export default categorySlice.reducer;