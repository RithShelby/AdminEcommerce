import React, { useEffect } from "react";
import { usePayment } from "../core/hook";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { usePaymentType } from "../../paymentType/core/hook";

const UpdatePayment = ({ id }) => {
  // const { id } = useParams();
  const { getUpdatePayment } = usePayment();
  const { paymentList } = useSelector((state) => state.payments);
  const paymentById = paymentList.find((p) => p.id == id);
  const { getPaymentType } = usePaymentType();
  const { paymentTypeList } = useSelector((state) => state.paymentTypes);
  useEffect(() => {
    getPaymentType();
  }, []);
  const updateFormik = useFormik({
    initialValues: {
      paymentTypeId: paymentById?.paymentType || null,
      provider: paymentById?.provider || "",
      account_number: paymentById?.accountNumber || "",
      expiry_date: paymentById?.expiryDate || "",
      // payment_method_id: paymentById?.payment_method_id || null,
    },

    onSubmit: (values) => {
      // let payment_method_id = [];
      // if (Array.isArray(values, payment_method_id)) {
      //   payment_method_id = payment_method_id.map((id) => parseInt(id));
      // } else if (typeof values.payment_method_id === "string") {
      //   payment_method_id = [parseInt(values.payment_method_id)];
      // }
      getUpdatePayment(id, values);
    },
  });

  return (
    <div className="row mx-5 my-3  ">
      <form onSubmit={updateFormik.handleSubmit}>
        <div className="col-lg-12">
          {" "}
          <select
            value={updateFormik.values.paymentTypeId || ""}
            name="paymentTypeId"
            onChange={updateFormik.handleChange}
            className="form-control my-4 m-auto py-3"
          >
            <option>Select Payment Type</option>
            {paymentTypeList.map((paymentType) => (
              <option key={paymentType.id} value={paymentType.id}>
                {paymentType.value}
              </option>
            ))}
          </select>
          <select
            value={updateFormik.values.provider || ""}
            name="provider"
            className="form-control my-4 m-auto py-3"
            onChange={updateFormik.handleChange}
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
            value={updateFormik.values.account_number}
            name="account_number"
            className="form-control my-4 m-auto py-3"
            onChange={updateFormik.handleChange}
            placeholder="Card Numbers"
          />
          <input
            type="text"
            value={updateFormik.values.expiry_date}
            name="expiry_date"
            className="form-control my-4 m-auto py-3"
            onChange={updateFormik.handleChange}
            placeholder="MM/YY"
          />
          <button className="btn btn-success m-auto w-50">Submit</button>
          {/* <select
              value={updateFormik.values.payment_method_id || ""}
              name="payment_method_id"
              className="form-control my-4 m-auto py-3"
              onChange={updateFormik.handleChange}
            >
              <option>Select Payment Method</option>
              {paymentList.map((payment) => (
                <option key={payment.id} value={payment.id}>
                  {payment.id}
                </option>
              ))}
            </select> */}
        </div>
      </form>
    </div>
  );
};

export default UpdatePayment;
