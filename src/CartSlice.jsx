import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of cart items
  },
  reducers: {
    // ✅ Add Item reducer
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check if item already in cart
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity++; // increase quantity
      } else {
        // Push new item with quantity = 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // ✅ Remove Item reducer
    removeItem: (state, action) => {
      // action.payload is the product name
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // ✅ Update Quantity reducer
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      // Find item by name
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // update quantity
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer
export default CartSlice.reducer;
