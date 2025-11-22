import { createSlice } from "@reduxjs/toolkit";

interface TypeAction {
  payload: {
    id?: number;
    qty?: number;
  };
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart") || "[]")
  },
  reducers: {
    addToCart: (state, action: TypeAction) => {
      const itemInCart = state.data.find(
        (item: { id: number }) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
    decrementInCart: (state, action) => {
      const itemInCart = state.data.find(
        (item: { id: number }) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty--;
      } else {
        return;
      }
    },
    deleteFromCart: (state, action) => {
      const deleteItem = state.data.filter(
        (item: { id: number }) => item.id !== action.payload.id
      );
      state.data = deleteItem;
    }
  }
});

export const { addToCart, decrementInCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
