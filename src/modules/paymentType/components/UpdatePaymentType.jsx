import React, { useEffect } from "react";
import { usePaymentType } from "../core/hook";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdatePaymentType = ({ id }) => {
  // const { id } = useParams();

  const { getUpdatePaymentType } = usePaymentType();
  const { paymentTypeList } = useSelector((state) => state.paymentTypes);
  const paymentTypeId = paymentTypeList.find((p) => p.id == id);

  const createFormik = useFormik({
    initialValues: {
      value: paymentTypeId?.value || "",
    },

    onSubmit: (values) => {
      getUpdatePaymentType(id, values);
    },
  });
  return (
    <div className="row mx-5 my-3  ">
      <form onSubmit={createFormik.handleSubmit}>
        <div className="col-lg-12">
          <input
            type="text"
            value={createFormik.values.value}
            name="value"
            className="form-control w-75 my-4 m-auto py-3"
            onChange={createFormik.handleChange}
            placeholder="Card name"
            required
          />
          <button className="btn btn-success m-auto d-flex" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePaymentType;
