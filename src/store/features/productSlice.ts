import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from './api/IProducts';

const initialState: Partial<IProduct> = {};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    togglePopupProduct: (_, action: PayloadAction<IProduct>) => {
      return action.payload;
    }
  }
});

export const { togglePopupProduct } = productSlice.actions;
export default productSlice.reducer;