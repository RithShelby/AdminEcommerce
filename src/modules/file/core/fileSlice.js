import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
  name: "files",
  initialState: {
    uploadSingle: null,
  },
  reducers: {
    setUploadSingle: (state, action) => {
      state.uploadSingle = action.payload;
    },
  },
});
export const { setUploadSingle } = fileSlice.actions;
export default fileSlice.reducer;
