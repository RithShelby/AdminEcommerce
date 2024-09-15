import { useDispatch } from "react-redux";
import { reqCreateShoppingCart, reqGetShoppingCart } from "./request";
import { setShopCart } from "./shoppingCartSlice";
import { useNavigate } from "react-router-dom";
import { setLoadingList } from "../../loading/core/loadingSlice";

const useShopCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getShopCart = () => {
    reqGetShoppingCart()
      .then((res) => {
        dispatch(setShopCart(res.data.data));
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createShopCart = (payload) => {
    return reqCreateShoppingCart(payload)
      .then((res) => {
        getShopCart();
        alert("Successfully created shopping cart");
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  return { getShopCart, createShopCart };
};
export { useShopCart };
