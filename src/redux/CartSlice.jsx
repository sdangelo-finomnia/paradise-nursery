import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ✅ ADD ITEM (gestione duplicati chiara)
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1
        });
      }
    },

    // ✅ REMOVE ITEM (chiaro e diretto)
    removeItem: (state, action) => {
      const id = action.payload;

      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    // ✅ UPDATE QUANTITY (SUPER IMPORTANTE)
    updateQuantity: (state, action) => {
      const id = action.payload.id;
      const amount = Number(action.payload.amount);

      // ✅ sicurezza (evita undefined/null)
      if (!id || isNaN(amount)) return;

      const item = state.items.find(
        (item) => item.id === id
      );

      if (!item) return;

      // ✅ aggiornamento quantità
      item.quantity = item.quantity + amount;

      // ✅ gestione quantità <= 0 → rimozione
      if (item.quantity <= 0) {
        state.items = state.items.filter(
          (i) => i.id !== id
        );
      }
    }

  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
