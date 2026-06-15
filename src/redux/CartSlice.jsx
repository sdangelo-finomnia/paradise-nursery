import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

addItem: (state, action) => {
  console.log("Aggiungendo articolo:", action.payload); // Log dell'articolo
  const existing = state.items.find(i => i.id === action.payload.id);
  if (existing) {
    existing.quantity++;
  } else {
    state.items.push({ ...action.payload, quantity: 1 });
  }
},

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload); // Rimuovi articolo
    },

    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (item) {
        item.quantity += amount;

        // Controlla se la quantità è zero o negativa
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id); // Rimuovi articolo se quantità è zero
        }
      }
    }

  }
});

// Esporta le azioni e il reducer
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
