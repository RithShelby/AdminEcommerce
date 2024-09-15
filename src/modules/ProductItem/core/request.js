import axios from "axios";
import { headerFormData } from "../../helper/generalHelp";
const reGetProductItem = (page = 0) => {
  return axios.get(`product-items?page=${page}`);
};
const reGetOrderProductItem = () => {
  return axios.get("product-items?order=asc");
};
const reShowProductItem = (id) => {
  return axios.get("product-items/" + id);
};
const reqCreateProductItem = (payload) => {
  return axios.post("product-items", payload);
};
const reqUpdateProductItem = (id, payload) => {
  return axios.patch(`product-items/${id}`, payload);
};
const reqUploadFile = (file) => {
  return axios.post("files/single", { file }, headerFormData);
};
const reqDeleteProductItem = (id, status) => {
  return axios.put(`product-items/${id}/status`, { status });
};
export {
  reGetProductItem,
  reGetOrderProductItem,
  reShowProductItem,
  reqCreateProductItem,
  reqUploadFile,
  reqDeleteProductItem,
  reqUpdateProductItem,
};
