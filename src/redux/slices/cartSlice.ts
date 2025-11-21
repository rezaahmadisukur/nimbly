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
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
