import { createSlice } from "@reduxjs/toolkit";

const reviewProductSlice = createSlice({
  name: "reviewProducts",
  initialState: {
    listReview: [],
    listReviewAll: [],
    selectedRating: null,
  },
  reducers: {
    setListReview: (state, action) => {
      state.listReview = action.payload;
    },
    setSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
    },
  },
});

export const { setListReview, setSelectedRating } = reviewProductSlice.actions;
export default reviewProductSlice.reducer;
