import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loadingList: false,
  },
  reducers: {
    setLoadingList: (state, action) => {
      state.loadingList = action.payload;
    },
  },
});
export const { setLoadingList } = loadingSlice.actions;
export default loadingSlice.reducer;
