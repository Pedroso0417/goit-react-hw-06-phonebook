import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (state, action) => {
      return action.payload;
    },
    clearFilter: () => {
      return '';
    },
  },
});

export const { updateFilter, clearFilter } = filterSlice.actions;

export const selectFilter = state => state.filter;

export default filterSlice.reducer;
