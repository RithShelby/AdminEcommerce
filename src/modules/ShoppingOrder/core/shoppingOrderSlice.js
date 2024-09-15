import { createSlice } from "@reduxjs/toolkit";

const shoppingOrderSlice = createSlice({
  name: "shoppingOrders",
  initialState: {
    listShoppingOrder: [],
  },
  reducers: {
    setListShoppingOrder: (state, action) => {
      state.listShoppingOrder = action.payload;
    },
  },
});
export const { setListShoppingOrder } = shoppingOrderSlice.actions;
export default shoppingOrderSlice.reducer;
