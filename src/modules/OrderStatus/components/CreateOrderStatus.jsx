import React, { useEffect } from "react";
import { useOrderStatus } from "../core/hook";
import { useFormik } from "formik";
import {useSweetAlert} from "../../SweetAlert";

const CreateOrderStatus = ({handleClose}) => {
  const { createOrderStatus } = useOrderStatus();
  const {SuccessAlert}  = useSweetAlert();
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
      handleClose()
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
        <button className="btn btn-success" type="submit" onClick={() => {
          SuccessAlert({title: "Create OrderStatus Success!", text: "Thank You!"}); // Show the success alert
          setTimeout(() => {
            handleClose(); // Close after the alert
          }, 1000); // Adjust the delay (1000ms = 1 second) as needed
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateOrderStatus;
