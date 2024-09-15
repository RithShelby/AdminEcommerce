import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    shopCartList: [],
  },
  reducers: {
    setShopCart: (state, action) => {
      state.shopCartList = action.payload;
    },
  },
});
export const { setShopCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
