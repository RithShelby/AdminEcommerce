import React from "react";
import { usePaymentType } from "../core/hook";
import { useFormik } from "formik";

const CreatePaymentType = ({ close }) => {
  const { getCreatePaymentType } = usePaymentType();

  const createFormik = useFormik({
    initialValues: {
      value: "",
    },

    onSubmit: (values) => {
      getCreatePaymentType(values);
      close(false);
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
            className="form-control w-100 mb-4  py-3"
            onChange={createFormik.handleChange}
            placeholder="Card name"
            required
          />
          <button className="btn btn-success m-auto d-flex">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePaymentType;
