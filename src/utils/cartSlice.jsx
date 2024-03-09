import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const item = {
        quantity: 1,
        id: action.payload.card.info.id,
        ...action.payload
      }
      state.items.push(item);
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        if (quantity === 0) {
          // Remove the item if the new quantity is 0
          state.items.splice(itemIndex, 1);
        } else {
          // Update the quantity if it's not 0
          state.items[itemIndex].quantity = quantity;
        }
      }
    }
    ,
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    }
  }
});

export const { addItem, updateItemQuantity, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
