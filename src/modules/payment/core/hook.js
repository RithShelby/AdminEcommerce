import { useDispatch } from "react-redux";
import {
  setDeletePayment,
  setLoading,
  setPaymentList,
  setUpdatePayment,
} from "./paymentSlice";
import {
  reqCreatePayment,
  reqDeletePayment,
  reqGetSearchPayment,
  reqUpdatePayment,
} from "./requset";
import { useNavigate } from "react-router-dom";

const usePayment = () => {
  const dispatch = useDispatch();
  const naviate = useNavigate();
  const getPayments = () => {
    dispatch(setLoading(true));
    return reqGetSearchPayment()
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setPaymentList(res.data.data));
      })
      .catch(() => {
        alert("Invalid payment");
      });
  };
  const createPayment = (payload) => {
    dispatch(setLoading(true));
    return reqCreatePayment(payload)
      .then(() => {
        getPayments();
        dispatch(setLoading(false));
        naviate("/payments");
        alert("Create Payment successfully");
      })
      .catch(() => alert("Invalid payment"));
  };
  const getUpdatePayment = (id, payload) => {
    dispatch(setLoading(true));
    return reqUpdatePayment(id, payload)
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setUpdatePayment(res.data.data));
        naviate("/payments");
        alert("Update Payment successfully");
      })
      .catch(() => alert("Invalid payment"));
  };
  const getDeletePayment = (id) => {
    return reqDeletePayment(id)
      .then(() => {
        alert("Delete Payment successfully");
        naviate("/payment");
      })
      .catch((err) => alert("Invalid payment"));
  };
  return {
      getPayments,
      // createPayment,
      // getUpdatePayment,
      getDeletePayment
  };
};

export { usePayment };
