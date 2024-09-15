import axios from "axios";
const reqGetCategories = () => {
  return axios.get("categories");
};
const reqGetCategoryById = (uuid) => {
  return axios.get(`categories/` + uuid);
};
const reqCreateCategory = (payload) => {
  return axios.post("categories", payload);
};

const reqUpdateCategory = (uuid, payload) => {
  return axios.patch(`categories/${uuid}`, payload);
};

const reqDeleteCategory = (uuid, status) => {
  const formData = new FormData();
  formData.append("status", status ? true : false);
  return axios.put(`categories/${uuid}/status`, formData);
};
export {
  reqGetCategories,
  reqGetCategoryById,
  reqCreateCategory,
  reqUpdateCategory,
  reqDeleteCategory,
};
