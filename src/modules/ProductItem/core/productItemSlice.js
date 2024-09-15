import { createSlice } from "@reduxjs/toolkit";

const productItemSlice = createSlice({
  name: "productItem",
  initialState: {
    productItemList: [],
    pagination: { currentPage: 0, totalPages: 2 },
    upProductItemList: [],
    productById: [],
    upImg: "",
    loading: false,
  },
  reducers: {
    setProductItem: (state, action) => {
      state.productItemList = action.payload.data;
      state.pagination = action.payload.paging;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setProductItembyId: (state, action) => {
      state.productById = action.payload;
    },
    setUpImg: (state, action) => {
      state.upImg = action.payload;
    },
    setLoadingProduct: (state, action) => {
      state.loading = action.payload;
    },
    setUpdateProductItem: (state, action) => {
      const updaterProductItem = action.payload;
      state.upProductItemList = state.upProductItemList.map((pro) => {
        if (pro.id === pro.id) {
          return updaterProductItem;
        }
        return pro;
      });
    },
  },
});

export const {
  setProductItem,
  setProductItembyId,
  setUpImg,
  setUpdateProductItem,
  setLoadingProduct,
  setCurrentPage,
} = productItemSlice.actions;

export default productItemSlice.reducer;
