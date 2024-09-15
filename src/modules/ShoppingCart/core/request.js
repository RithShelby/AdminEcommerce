import axios from "axios";
const reqGetShoppingCart = () => {
  return axios.get("shop_cart");
};
const reqCreateShoppingCart = (payload) => {
  return axios.post("shop_cart", payload);
};
export { reqGetShoppingCart, reqCreateShoppingCart };
