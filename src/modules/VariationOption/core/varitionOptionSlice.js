import { createSlice } from "@reduxjs/toolkit";
const variationOptionsSlice = createSlice({
  name: "variationOpions",
  initialState: {
    listVariationOptions: [],
    loading: false,
  },
  reducers: {
    setVariationOption: (state, action) => {
      state.listVariationOptions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setVariationOption, setLoading } = variationOptionsSlice.actions;
export default variationOptionsSlice.reducer;
