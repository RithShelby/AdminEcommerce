import { createSlice } from "@reduxjs/toolkit";

const paymentsSlice = createSlice({
  name: "payments",
  initialState: {
    paymentList: [],
    updatePayment: [],
    loading: false,
  },
  reducers: {
    setPaymentList: (state, action) => {
      state.paymentList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUpdatePayment: (state, action) => {
      const setUpdatePayment = action.payload;
      state.updatePayment = state.updatePayment.map((p) => {
        if (p.uuid === p.uuid) {
          return setUpdatePayment;
        }
        return p;
      });
    },
  },
});

export const {
  setPaymentList,
  setLoading,
  setUpdatePayment,
  setDeletePayment,
} = paymentsSlice.actions;

export default paymentsSlice.reducer;
