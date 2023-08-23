import { configureStore } from '@reduxjs/toolkit';
import dashReducer from '@store/features/dashSlice';
import categoryReducer from '@store/features/categorySlice';
import inputReducer from '@store/features/inputSlice';
import siteReducer from '@store/features/siteSlice';
import popupReducer from '@store/features/popupSlice';
import productReducer from '@store/features/productSlice';
import { lastcraftAPI } from './features/api/api';

export const store = configureStore({
  reducer: {
    dashboard: dashReducer,
    category: categoryReducer,
    input: inputReducer,
    site: siteReducer,
    popup: popupReducer,
    product: productReducer,
    [lastcraftAPI.reducerPath]: lastcraftAPI.reducer
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(lastcraftAPI.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>