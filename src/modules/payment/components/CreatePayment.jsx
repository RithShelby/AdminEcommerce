import { useFormik } from "formik";
import React, { useEffect } from "react";
import { usePayment } from "../core/hook";
import { useSelector } from "react-redux";
import { usePaymentType } from "../../paymentType/core/hook";
import {useSweetAlert} from "../../SweetAlert";

const CreatePayment = ({handleClose}) => {
  const { createPayment, getPayments } = usePayment();
  const {SuccessAlert} = useSweetAlert();
  const { paymentList } = useSelector((state) => state.payments);
  const { getPaymentType } = usePaymentType();
  const { paymentTypeList } = useSelector((state) => state.paymentTypes);

  useEffect(() => {
    getPayments();
    getPaymentType();
  }, []);
  const createFormik = useFormik({
    initialValues: {
      paymentTypeId: null,
      provider: "",
      account_number: "",
      expiry_date: "",
      payment_method_id: null,
    },
    onSubmit: (values) => {
      // let payment_method_id = [];
      // if (Array.isArray(values, payment_method_id)) {
      //   payment_method_id = payment_method_id.map((id) => parseInt(id));
      // } else if (typeof values.payment_method_id === "string") {
      //   payment_method_id = [parseInt(values.payment_method_id)];
      // }
      createPayment(values);
      handleClose();
    },
  });
  return (
    <div className="row mx-5 my-3  ">
      <form onSubmit={createFormik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <select
                value={createFormik.values.paymentTypeId || ""}
                name="paymentTypeId"
                onChange={createFormik.handleChange}
                className="form-control w-75 my-4 m-auto py-3"
            >
              <option>Select Payment Type</option>
              {paymentTypeList.map((paymentType) => (
                  <option key={paymentType.id} value={paymentType.id}>
                    {paymentType.value}
                  </option>
              ))}
            </select>
            <select
                value={createFormik.values.provider || ""}
                name="provider"
                className="form-control w-75 my-4 m-auto py-3"
                onChange={createFormik.handleChange}
            >
              <option>Select Provider</option>
              {paymentList.map((payment) => (
                  <option key={payment.id} value={payment.provider}>
                    {payment.provider}
                  </option>
              ))}
            </select>
            <input
                type="text"
                value={createFormik.values.account_number}
                name="account_number"
                className="form-control w-75 my-4 m-auto py-3"
                onChange={createFormik.handleChange}
                placeholder="Card Number"
            />
            <input
                type="text"
                value={createFormik.values.expiry_date}
                name="expiry_date"
                className="form-control w-75 my-4 m-auto py-3"
                onChange={createFormik.handleChange}
                placeholder="MM/YY"
            />
            {/* <select
              type="number"
              value={createFormik.values.payment_method_id || ""}
              name="payment_method_id"
              className="form-control w-75 my-4 m-auto py-3"
              onChange={createFormik.handleChange}
              placeholder="Enter account payment medhod id"
            >
              <option>Select Payment Method</option>
              {paymentList.map((payment) => (
                <option key={payment.id} value={payment.id}>
                  {payment.name}
                </option>
              ))}
            </select> */}
          </div>
          <button className="btn btn-success" type="submit" onClick={() => {
            SuccessAlert({title: "Create Payment Success!", text: "Thank You!"}); // Show the success alert
            setTimeout(() => {
              handleClose(); // Close after the alert
            }, 1000); // Adjust the delay (1000ms = 1 second) as needed
          }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePayment;
