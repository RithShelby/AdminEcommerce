import React, { useEffect } from "react";
import { useOrderStatus } from "../core/hook";
import { useFormik } from "formik";

const CreateOrderStatus = () => {
  const { createOrderStatus } = useOrderStatus();
  const { getOrderStatus } = useOrderStatus();
  useEffect(() => {
    getOrderStatus();
  }, []);
  const createOrderFormik = useFormik({
    initialValues: {
      status: "",
    },
    onSubmit: (values) => {
      createOrderStatus(values);
    },
  });
  return (
    <div className="row">
      <form action="" onSubmit={createOrderFormik.handleSubmit}>
        <input
          className="form-control my-4 py-3 w-100 m-auto"
          type="status"
          placeholder="Enter Status"
          name="status"
          value={createOrderFormik.values.status}
          onChange={createOrderFormik.handleChange}
        />
        <button type="submit" className="btn btn-success d-flex m-auto ">
          Create OrderStatus
        </button>
      </form>
    </div>
  );
};

export default CreateOrderStatus;
