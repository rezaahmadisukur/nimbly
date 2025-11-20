import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  cart: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState: intialState,
  reducers: {
    // addCart: (state) => {
    //   state.cart
    // }
  }
});

export default cartSlice.reducer;
