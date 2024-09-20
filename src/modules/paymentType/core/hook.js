import { useDispatch } from "react-redux";
import { setLoading, setPaymentTypeList } from "./paymentTypeSlice";
import {
  reqCreatePaymentType,
  reqDeletePaymentType,
  reqGetPaymentType,
  reqUpdatePaymentType,
} from "./request";
import { useNavigate } from "react-router-dom";
import { DiAtom } from "react-icons/di";

const usePaymentType = () => {
  const dispatch = useDispatch();
  const naviate = useNavigate();
  const getPaymentType = () => {
    dispatch(setLoading(true));
    return reqGetPaymentType()
      .then((res) => {
        dispatch(setPaymentTypeList(res.data.data));
        dispatch(setLoading(false));
      })
      .catch((err) => console.log(err));
  };
  const getCreatePaymentType = (payload) => {
    dispatch(setLoading(true));
    return reqCreatePaymentType(payload)
      .then(() => {
        dispatch(setLoading(false));
        getCreatePaymentType();
        alert("Create payment type success");
        naviate("/paymentType");
      })
      .catch((err) => console.log(err));
  };
  const getUpdatePaymentType = (id, payload) => {
    dispatch(setLoading(true));
    return reqUpdatePaymentType(id, payload)
      .then(() => {
        naviate("/paymentType");
        dispatch(setLoading(false));
        alert("Update Payment Type succesful");
      })
      .catch((err) => console.log(err));
  };
  const getDeletePaymentType = (id) => {
    dispatch(setLoading(true));
    return reqDeletePaymentType(id)
      .then(() => {
        dispatch(setLoading(false));
        alert("Delete successful");
        naviate("/paymentType");
      })
      .catch((err) => console.log(err));
  };
  return {
    getPaymentType,
    // getCreatePaymentType,
    // getUpdatePaymentType,
    // getDeletePaymentType,
  };
};

export { usePaymentType };
