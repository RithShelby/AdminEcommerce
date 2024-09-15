import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    listProduct: [],
    categoryOption: [],
    productByUuid: [],
    productReview: [],
    uploadImg: "",
  },
  reducers: {
    setListProduct: (state, action) => {
      state.listProduct = action.payload;
    },
    setCategoryOption: (state, action) => {
      const categorys = action.payload;
      state.categoryOption = _.map(categorys, (data) => ({
        value: data.category.id,
        label: data.category.name,
      }));
    },
    setProductByUuid: (state, action) => {
      state.productByUuid = action.payload;
    },

    setProductReview: (state, action) => {
      state.productReview = action.payload;
    },

    setUpdateProduct: (state, action) => {
      const updateProduct = action.payload;
      state.listProduct = state.listProduct.map((p) => {
        if (p.uuid) {
          return updateProduct;
        }
        return p;
      });
    },
    setUploadImg: (state, action) => {
      state.uploadImg = action.payload;
    },
  },
});

export const {
  setListProduct,
  setCreateProduct,
  setProductByUuid,
  setUpdateProduct,
  setDeleteProduct,
  setUploadImg,
  setProductReview,
  setCategoryOption,
} = productsSlice.actions;

export default productsSlice.reducer;
