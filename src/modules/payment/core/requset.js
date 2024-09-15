import axios from "axios";

const reqGetSearchPayment = () => {
  return axios.get("payment");
};

const reqCreatePayment = (payload) => {
  return axios.post("payment", payload);
};

const reqUpdatePayment = (id, payload) => {
  return axios.put(`payment/${id}`, payload);
};

const reqDeletePayment = (id) => {
  return axios.delete(`payment/${id}`);
};

export {
  reqGetSearchPayment,
  reqCreatePayment,
  reqUpdatePayment,
  reqDeletePayment,
};
