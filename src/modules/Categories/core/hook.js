import { useDispatch, useSelector } from "react-redux";
import {
  setCategories,
  setCategoriesById,
  setClose,
  setLoading,
  setUpdateCategories,
} from "./categorieSlice";
import {
  reqCreateCategory,
  reqDeleteCategory,
  reqGetCategories,
  reqGetCategoryById,
  reqUpdateCategory,
} from "./request";
import { useNavigate } from "react-router-dom";
import { setLoadingList } from "../../loading/core/loadingSlice";
const useCatagories = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const getCategories = () => {
    dispath(setLoadingList(true));
    reqGetCategories().then((res) => {
      // console.log(res.data.data);
      dispath(setCategories(res.data.data));
      dispath(setLoadingList(false));
    });
  };
  const showCategoryById = (uuid) => {
    dispath(setLoadingList(true));
    return reqGetCategoryById(uuid).then((res) => {
      dispath(setCategoriesById(res.data.data));
      dispath(setLoadingList(false));
    });
  };
  const createCategory = (payload) => {
    dispath(setLoadingList(true));
    return reqCreateCategory(payload).then((res) => {
      dispath(setLoadingList(false));
      getCategories();
    });
  };
  const updateCategories = (uuid, payload) => {
    dispath(setLoadingList(true));
    return reqUpdateCategory(uuid, payload)
      .then((res) => {
        // console.log(res);
        dispath(setUpdateCategories(res.data.data));
        alert("updated successfull!!!");
        dispath(setLoadingList(false));
      })
      .catch((err) => console.log(err));
  };
  const deleteCategories = (uuid, status) => {
    // dispath(setLoadingList(true));
    return reqDeleteCategory(uuid, status)
      .then(() => {
        dispath(setLoadingList(false));
        alert("Status Updated Successfully!");
        navigate("/categories");
      })
      .catch((err) => console.log(err));
  };

  return {
    getCategories,
    showCategoryById,
    createCategory,
    updateCategories,
    deleteCategories,
  };
};
export { useCatagories };
