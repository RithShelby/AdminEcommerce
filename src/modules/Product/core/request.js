import axios from "axios";
import { headerFormData } from "../../helper/generalHelp";

const reqGetProducts = () => {
  return axios.get("products?query=all");
};

const reqShowProductByUuid = (uuid) => {
  return axios.get("products/" + uuid);
};

const reqUserReview = (uuid) => {
  return axios.get(`products/userReviews/${uuid}`);
};

const reqCreateProduct = (payload) => {
  return axios.post("products", payload);
};

const reqUpdateProduct = (uuid, payload) => {
  return axios.patch(`products/${uuid}`, payload);
};

const reqDeleteProduct = (uuid, status) => {
  const formData = new FormData();
  formData.append("status", status ? true : false);
  return axios.put(`products/${uuid}/status`, formData);
};

const reqUploadFile = (file) => {
  return axios.post("files/single", { file }, headerFormData);
};

export {
  reqGetProducts,
  reqCreateProduct,
  reqShowProductByUuid,
  reqUserReview,
  reqUpdateProduct,
  reqDeleteProduct,
  reqUploadFile,
};
