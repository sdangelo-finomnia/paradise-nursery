import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increase: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      item.quantity++;
    },

    decrease: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item.quantity > 1) item.quantity--;
      else state.items = state.items.filter(i => i.id !== action.payload);
    },

    remove: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});

export const { addItem, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
