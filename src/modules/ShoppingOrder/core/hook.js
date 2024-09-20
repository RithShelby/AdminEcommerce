import { useDispatch } from "react-redux";
import { setLoading } from "../../Roles/core/roleSlice";
import {
  reGetShoppingOrder,
  reqCreateShoppingOrderByCart,
  reqDeleteShoppingOrder,
  reqUpdateShoppingOrder,
} from "./request";
import { useNavigate } from "react-router-dom";
import { setListShoppingOrder } from "./shoppingOrderSlice";

const useShoppingOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getShoppingOrder = () => {
    dispatch(setLoading(true));
    reGetShoppingOrder()
      .then((respone) => {
        dispatch(setLoading(false));
        dispatch(setListShoppingOrder(respone.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createShoppingOrderByCart = (payload) => {
    return reqCreateShoppingOrderByCart(payload)
      .then((res) => {
        alert("Create Shopping Order success");
        getShoppingOrder()
        // navigate("/shopping-order");
      })
      .catch((err) => alert("error"));
  };
  const updateShoppingOrder = (id, payload) => {
    return reqUpdateShoppingOrder(id, payload)
      .then(() => {
        alert("Successfully updated!!s");
      })
      .catch((err) => console.log(err));
  };
  const deleteShoppingOrder = (id) => {
    return reqDeleteShoppingOrder(id)
      .then((res) => {
        alert("Successfully deleted");
        window.location.href = "/shopping-order";
        setListShoppingOrder(res.data.data);
      })
      .catch((error) => {
        console.error("Error deleting Shopping Order:", error);
        alert("Failed to delete  Shopping Order. Please try again.");
      });
  };

  return {
    getShoppingOrder,
    // createShoppingOrderByCart,
    // deleteShoppingOrder,
    // updateShoppingOrder,
  };
};

export { useShoppingOrder };
