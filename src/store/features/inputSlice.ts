import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IValueInput {
  value: string
}

const initialState: IValueInput = {
  value: ''
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    toggleValueInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { toggleValueInput } = inputSlice.actions;
export default inputSlice.reducer;