import axios from "axios";

const reqGetPaymentType = () => {
  return axios.get("paymenttype");
};
const reqCreatePaymentType = (payload) => {
  return axios.post("paymenttype", payload);
};
const reqUpdatePaymentType = (id, payload) => {
  return axios.put(`paymenttype/${id}`, payload);
};
const reqDeletePaymentType = (id) => {
  return axios.delete(`paymenttype/${id}`);
};
export {
  reqGetPaymentType,
  reqCreatePaymentType,
  reqUpdatePaymentType,
  reqDeletePaymentType,
};
