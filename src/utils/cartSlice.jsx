import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      // Used Immer library behind the scenes to do immutable object
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // normal console prints proxy object,so use current(state)
      // mutate the existing state or return new state
      state.items.length = 0; // return {items:[]}
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;