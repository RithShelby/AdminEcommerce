import { createSlice } from "@reduxjs/toolkit";

const paymentTypeSlice = createSlice({
  name: "paymentTypes",
  initialState: {
    paymentTypeList: [],
    loading: false,
  },
  reducers: {
    setPaymentTypeList: (state, action) => {
      state.paymentTypeList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCratePaymentType: (state, action) => {
      state.paymentTypeList = action.payload;
    },
  },
});
export const { setPaymentTypeList, setLoading, setCratePaymentType } =
  paymentTypeSlice.actions;
export default paymentTypeSlice.reducer;
