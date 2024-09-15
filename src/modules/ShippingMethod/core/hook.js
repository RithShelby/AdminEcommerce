import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../Roles/core/roleSlice";
import { setLoadingList } from "../../loading/core/loadingSlice";
import {
  reqCreateShippingMethod,
  reqDeleteShippingMethod,
  reqGetShippingMethod,
  reqUpdateShippingMethod,
  requpdateShippingMethod,
} from "./request";
import {
  setShippingMethod,
  setShoppingMethod,
  setUpdatingShippingMethod,
} from "./shippingMethodSlice";

const useShippingMethod = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getShippingMethod = () => {
    // dispatch(setLoadingList(true));
    reqGetShippingMethod().then((res) => {
      console.log(res.data.data);
      dispatch(setShippingMethod(res.data.data));
      // console.log(res.data.data);
      // dispatch(setLoadingList(false));
    });
  };
  const createdShippingMethod = (payload) => {
    return reqCreateShippingMethod(payload).then((res) => {
      getShippingMethod();
      navigate("/shipping-method");
      alert("Successfully created Shipping Method");
    });
  };
  const updateShippingMethod = (id, payload) => {
    return reqUpdateShippingMethod(id, payload)
      .then((res) => {
        dispatch(setUpdatingShippingMethod(res.data.data));
        // console.log(res.data.data)
        alert("Update Success!");
        navigate("/shipping-method");
      })
      .catch((err) => console.log(err));
  };
  const deleteShippingMethod = (id) => {
    return reqDeleteShippingMethod(id)
      .then(() => {
        alert("Success deletes Shipping Method");
        // window.location.href = "/shipping-method";
      })
      .catch((err) => console.error(err)); // Changed console.log to console.error for better error handling
  };
  return {
    getShippingMethod,
    createdShippingMethod,
    deleteShippingMethod,
    updateShippingMethod,
  };
};
export { useShippingMethod };
