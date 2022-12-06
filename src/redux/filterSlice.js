import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
    
  reducers: {
    setFilter(_, {payload}) {
      return payload;
   }
  }
})

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const getFilterValue = state => state.filter;