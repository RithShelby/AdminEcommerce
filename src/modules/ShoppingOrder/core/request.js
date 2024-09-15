import axios from "axios";

const reGetShoppingOrder = () => {
  return axios.get("shopping-order");
};

const reqCreateShoppingOrderByCart = (payload) => {
  return axios.post("/shopping-order/checkout", payload);
};

const reqDeleteShoppingOrder = (id) => {
  return axios.delete(`/shopping-order/${id}`);
};

const reqUpdateShoppingOrder = (id, payload) => {
  return axios.put(`/shopping-order/${id}`, payload);
};

export {
  reGetShoppingOrder,
  reqCreateShoppingOrderByCart,
  reqDeleteShoppingOrder,
  reqUpdateShoppingOrder,
};
