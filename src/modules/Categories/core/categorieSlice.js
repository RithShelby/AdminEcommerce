import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    listCategories: [],
    updateCategoriesList: [],
    listCategoriesById: [],
  },
  reducers: {
    setCategories: (state, action) => {
      state.listCategories = action.payload;
    },
    setCategoriesById: (state, action) => {
      state.listCategoriesById = action.payload;
    },
    setUpdateCategories: (state, action) => {
      const updateCategories = action.payload;
      state.updateCategoriesList = state.updateCategoriesList.map((cate) => {
        if (cate.uuid === updateCategories.uuid) {
          return updateCategories;
        }
        return cate;
      });
    },
    setDeleteCategories: (state, action) => {},
  },
});
export const {
  setCategories,
  setCategoriesById,
  setUpdateCategories,
  setClose,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
